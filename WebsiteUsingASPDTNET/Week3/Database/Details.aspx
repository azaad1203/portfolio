<%@ Page Language="C#" Debug="true" %>
<script language="c#" runat="server">
 void Page_Load(Object sender, EventArgs e)
 {

customersDB.SelectCommand = "SELECT * FROM customers WHERE customer_name = '" + Request.QueryString["customer_name"] + "'";

lvBook.DataSource = customersDB;
 lvBook.DataBind();
 }
</script>

<asp:accessdatasource runat="server"
 DataFile="CustomerDB.accdb" id="customersDB" />


<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" href="style2.css" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
    <div>
       <asp:listView runat="server" id="lvBook">
         <ItemTemplate>
         <table width="60%" cellpadding="3">
             <tr>
             <td>
                 <asp:Image ID="customer_pic" runat="server"
                     ImageUrl='<%# Eval("customer_pic", "Images/{0}") %>'
                     CssClass="" /> 
             </td>
             <td>
             <b>Customer's name: <%# Eval("customer_name") %></b><br />
             Customer's email: <%# Eval("customer_email") %><br />
             Customer's address: <%# Eval("customer_address") %><br />
             Customer's phone number: <%# Eval("customer_phone") %><p />
             
             </td>
             </tr>
         </table>
         </ItemTemplate>
      </asp:listView>
        
        
        
        
        
        <%-- 
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
    </div>--%>

    </div>
    </form>
</body>
</html>
