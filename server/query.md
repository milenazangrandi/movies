FROM (SELECT unnest(string_to_array(answer, ',')) AS theAnswer
    FROM Answers) AS theAnswer
GROUP BY theAnswer