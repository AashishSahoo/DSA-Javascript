-- /select  r.contest_id   , ((r.contest_id) /  count( distinct u.user_id ) )   as percentage 
-- from Users as u
-- join Register as r
-- on  u.user_id = r.user_id  

-- group by r.contest_id
-- order by percentage desc

-- select contest_id ,contest_id/user_id  as percentage

-- select   total_user , contest_id, perContest_user
-- from 
-- (
-- select distinct count(u.user_id) as total_user , r.contest_id, count(*) as perContest_user
-- from Users as u
-- join Register as r
-- on  u.user_id = r.user_id  
-- group by r.contest_id
-- ) as result
-- order by percentage desc


select contest_id, round((perContest_user/total_users) *100 ,2) as percentage
from 
(
select count(user_id) as perContest_user, contest_id
, (select distinct (count(user_id)) from Users) as total_users
from Register  
group by contest_id
) as result
order by percentage desc, contest_id;
