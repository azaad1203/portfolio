<%@ Page Language="C#" %>

<asp:accessdatasource runat="server" id="dsAccess" 
  DataFile="database1.accdb" 
  SelectCommand="SELECT * FROM Product_details" />

<script runat="server">

</script>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
                <!-- This example uses Microsoft SQL Server and connects -->
      <!-- to the Northwind sample database.                   -->
      <asp:sqldatasource id="dsAccess1" 
        selectcommand="SELECT [Product_ID], [Product_name], [Product__price], [Product_image] FROM [Product_details] WHERE [Product_ID=@Product_ID]"
        connectionstring="server=localhost;database=northwind;integrated security=SSPI"
        runat="server">

          <SelectParameters>
                <asp:QueryStringParameter
                     Name="Product_ID"
                     QueryStringField="Product_ID" 
                     />
            </SelectParameters>
      </asp:sqldatasource>
        
        <asp:DetailsView 
            ID="DetailsView1"
            runat="server"
            DataSourceID="dsAccess"
            AllowPaging="true"
            ForeColor="AliceBlue"
            BackColor="DodgerBlue"
            BorderColor="LightSkyBlue"
            >
        </asp:DetailsView>        
    </div>

    </div>
    </form>
</body>
</html>
