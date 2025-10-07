select  eu.unique_id  as unique_id  , e.name
from Employees as e
left join EmployeeUNI as eu
on e.id=eu.id
-- group by  e.name 