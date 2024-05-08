# Write your MySQL query statement below
SELECT a.machine_id, ROUND(AVG(a.timestamp - b.timestamp ),3)AS processing_time
FROM (SELECT * FROM Activity WHERE activity_type = 'end') AS a
LEFT JOIN (SELECT * FROM Activity WHERE activity_type = 'start') AS b
ON a.machine_id = b.machine_id
GROUP BY a.machine_id;