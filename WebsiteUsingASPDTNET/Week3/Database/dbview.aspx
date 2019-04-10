<%@ Page Language="C#" Debug="true"%>

<!DOCTYPE html>
<script language="c#" runat="server">
    void displayData(object sender,GridViewCommandEventArgs e)
{
 lblDisplayCustomer.Text = "<table><tr><td>" +
 gvCustomers.Rows[Convert.ToInt32(e.CommandArgument)].
 Cells[6].Text+
 " </td><td><b>Selected Customer: </b><p /><b> Customer Name: " +
 gvCustomers.Rows[Convert.ToInt32 (e.CommandArgument)].
 Cells[2].Text +
 "</b> </p> <b> Email:" +
 gvCustomers.Rows[Convert.ToInt32(e.CommandArgument)].
 Cells[3].Text +
 " </b> <br />Address: " +
 gvCustomers.Rows[Convert.ToInt32(e.CommandArgument)].
 Cells[4].Text +
 "<br />Phone: " +
 gvCustomers.Rows[Convert.ToInt32(e.CommandArgument)].
 Cells[5].Text +
 "</td></tr></table>";
}


</script>

<asp:accessdatasource runat="server"
     DataFile="CustomerDB.accdb"
     id="customersDB"
     SelectCommand="SELECT * FROM customers ORDER BY customer_id" >
</asp:accessdatasource>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>
        List of customers
    </title>
    <link rel="stylesheet" href="style2.css" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <div class="header2">
                <h1 CssClass="head" runat="server"> List of customers</h1>
          </div>

        <asp:Label ID="lblDisplayCustomer" runat="server"
             CssClass="CusLabel" />

    
         <asp:GridView id="gvCustomers"
             runat="server"
             DataSourceID="customersDB"
             CellPadding="3"
             Font-Names="arial"
             Font-Size="12pt"
             CssClass="mydatagrid" PagerStyle-CssClass="pager"
             HeaderStyle-CssClass="header" RowStyle-CssClass="rows"
             OnRowCommand="displayData"
             AutoGenerateColumns="false">
             
             <Columns>
                 <asp:BoundField DataField="customer_id"
                    HeaderText="Customer ID" ReadOnly="True"
                    ItemStyle-VerticalAlign="Top" InsertVisible="False"/>
                 <asp:ButtonField ButtonType="Button" Text="Display"
                    ItemStyle-CssClass="CusItem" />              
                 <asp:HyperLinkField DataTextField="customer_name"
                     HeaderText="Customer's name" Target="_blank"
                     DataNavigateUrlFields="customer_name"
                     DataNavigateUrlFormatString="~/Week3/Database/Details.aspx?customer_name={0}"
                     InsertVisible="False" />
               <%--  <asp:BoundField DataField="customer_name"
                    HeaderText="Customer Name" ReadOnly="True"
                    ItemStyle-VerticalAlign="Top" InsertVisible="False"/> --%>
                 <asp:BoundField DataField="customer_email"
                    HeaderText="Customer Email" ReadOnly="True"
                    ItemStyle-VerticalAlign="Top" InsertVisible="False"/>
                 <asp:BoundField DataField="customer_address"
                    HeaderText="Customer Address" ReadOnly="True"
                    ItemStyle-VerticalAlign="Top" InsertVisible="False"/>
                 <asp:BoundField DataField="customer_phone"
                    HeaderText="Customer Phone" ReadOnly="True"
                    ItemStyle-VerticalAlign="Top" InsertVisible="False"/>
                <%-- <asp:BoundField DataField="customer_pic" 
                     HeaderText="Customer's Photo" HTMLEncode="false" InsertVisible="False"/>
                     
                    --%>
                  <asp:Imagefield DataImageUrlField="customer_pic" 
                     HeaderText="Customer's Photo" InsertVisible="False" ReadOnly="True" />
                

                 
             </Columns>

          </asp:GridView>

    </div>
    </form>
</body>
</html>
