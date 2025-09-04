#1378. Replace Employee ID With The Unique Identifier 
# Write your MySQL query statement below

select u.unique_id, e.name
from Employees e
left join EmployeeUNI u
on e.id=u.id
