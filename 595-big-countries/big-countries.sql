# Write your MySQL query statement below
select  name  , population , area    
from World as w
where w.area>=3000000 or w.population>=25000000
