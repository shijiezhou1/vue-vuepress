# PHP PDO Connection

```
try {
    $db = new PDO('mysql:host=localhost;dbname=dbname', 'username', 'password');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
}catch(PDOException $e) { 
   echo "Connection failed: " . $e->getMessage();
}
```

# PHP PDO RETURN VALUE ARRAY

```
$sql = "SELECT * FROM users";
foreach ($db->query($sql, PDO::FETCH_ASSOC) as $row) {
    print_r($row);
}
```

```
$sth = $db->prepare("SELECT * FROM users");
$sth->execute();
$result = $sth->fetchAll(PDO::FETCH_ASSOC);
print_r($result);
```
