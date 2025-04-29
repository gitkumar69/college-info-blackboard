-- Create tables for the student portal

-- Students table
CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  register_number VARCHAR(20) NOT NULL UNIQUE,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  age INT NOT NULL,
  address TEXT,
  phone VARCHAR(15),
  branch VARCHAR(50) NOT NULL,
  year INT NOT NULL,
  semester INT NOT NULL
);

-- Faculty table
CREATE TABLE faculty (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  department VARCHAR(50) NOT NULL
);

-- Courses table
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_code VARCHAR(20) NOT NULL UNIQUE,
  course_name VARCHAR(100) NOT NULL,
  department VARCHAR(50) NOT NULL,
  faculty_id UUID REFERENCES faculty(id)
);

-- Classes table
CREATE TABLE classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_name VARCHAR(20) NOT NULL,
  course_id UUID REFERENCES courses(id) NOT NULL,
  year INT NOT NULL,
  semester INT NOT NULL
);

-- Class enrollments table (links students to classes)
CREATE TABLE class_enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID REFERENCES classes(id) NOT NULL,
  student_id UUID REFERENCES students(id) NOT NULL,
  UNIQUE(class_id, student_id)
);

-- Attendance records table
CREATE TABLE attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) NOT NULL,
  class_id UUID REFERENCES classes(id) NOT NULL,
  date DATE NOT NULL,
  status VARCHAR(10) CHECK (status IN ('present', 'absent')) NOT NULL,
  faculty_id UUID REFERENCES faculty(id) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(student_id, class_id, date)
);

-- Internal marks table
CREATE TABLE internal_marks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) NOT NULL,
  class_id UUID REFERENCES classes(id) NOT NULL,
  marks INT CHECK (marks >= 0 AND marks <= 60) NOT NULL,
  faculty_id UUID REFERENCES faculty(id) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(student_id, class_id)
);

-- HOD table
CREATE TABLE hod (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  department VARCHAR(50) NOT NULL
);

-- Add Row Level Security (RLS)
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE fculty ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE class_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE internal_marks ENABLE ROW LEVEL SECURITY;
ALTER TABLE hod ENABLE ROW LEVEL SECURITY;

-- Link authentication users to roles
CREATE TABLE user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users NOT NULL,
  role VARCHAR(10) CHECK (role IN ('student', 'faculty', 'hod')) NOT NULL,
  ref_id UUID, -- stores the ID of the student/faculty/hod
  UNIQUE(user_id, role)
);

-- Add some sample data based on the mockData.ts
-- (Sample data would go here - omitted for brevity)