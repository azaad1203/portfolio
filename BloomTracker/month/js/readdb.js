// Replace the variables in this block with real values.
// You can find the "Instance connection name" in the Google Cloud
//   Platform Console, on the instance Overview page.
var connectionName = 'ie-2018-217501:australia-southeast1:hive-ie';// instance connection name
var user = 'root@35.197.144.178';
var userPwd = 'av29csql';
var db = 'comment';

var dbUrl = 'jdbc:google:mysql://' + connectionName + '/' + db;

// Read up to 1000 rows of data from the table and log them.
function readFromTable() {
  var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);

  var start = new Date();
  var stmt = conn.createStatement();
  stmt.setMaxRows(1000);
  var results = stmt.executeQuery('SELECT * FROM reply');
  var numCols = results.getMetaData().getColumnCount();

  while (results.hasNext()) {
    var rowString = '';
    for (var col = 0; col < numCols; col++) {
        rowString += results.getString(col + 1) + '\t';
        document.getElementById("usercomment").innerText += rowString;
    }
    Logger.log(rowString)
  }

  results.close();
    stmt.close();
    //conn.close();//added

  var end = new Date();
  Logger.log('Time elapsed: %sms', end - start);
}

