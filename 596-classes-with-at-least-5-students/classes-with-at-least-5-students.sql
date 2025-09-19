#596. Classes More Than 5 Students
# Write your MySQL query statement below

select class 
from Courses
group by class
having count(student) >=5