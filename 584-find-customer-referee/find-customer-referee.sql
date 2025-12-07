# Write your MySQL query statement below
select name 
from Customer as c
where c.referee_id!=2 or
     c.referee_id  is NULL