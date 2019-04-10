<%@ Page Language="C#" Debug="true" %>

<asp:accessdatasource runat="server"
                    datafile="CustomerDB.accdb" id="customersDB">
                 </asp:accessdatasource>

<script language="c#" runat="server">
    private void FindCus(object sender, EventArgs e)
    {
        String spa = @"^\s*";
        String inp = null;
        String emp = "";
        Button btn = (Button)sender;
        switch (btn.CommandName)
        {
            case "CId":
                if (cusID.Text == emp)
                {
                    EM1.Text = "Input empty!";
                }
                else if (cusID.Text == inp)
                {
                    EM1.Text = "Invalid input";
                }
                else if(cusID.Text == spa)
                {
                    EM1.Text = "Invalid Input";
                }
                else
                {
                    customersDB.SelectCommand = "SELECT * FROM customers WHERE customer_id LIKE '%" +
                    cusID.Text.Trim(' ') + "%'";
                }
                break;

            case "CName":
                if (cusN.Text == emp)
                {
                    EM2.Text = "Input empty!";
                }
                else if (cusN.Text == inp)
                {
                    EM2.Text = "Invalid input";
                }
                else if(cusN.Text == spa)
                {
                    EM2.Text = "Invalid Input";
                }
                else
                {
                    customersDB.SelectCommand = "SELECT * FROM customers WHERE customer_name LIKE '%" +
                    cusN.Text.Trim(' ') + "%'";
                }
                break;

            case "CEmail":
                if (cusE.Text == emp)
                {
                    EM3.Text = "Input empty!";
                }
                else if (cusE.Text == inp)
                {
                    EM3.Text = "Invalid input";
                }
                else if(cusE.Text == spa)
                {
                    EM3.Text = "Invalid Input";
                }
                else
                {
                    customersDB.SelectCommand = "SELECT * FROM customers WHERE customer_email LIKE '%" +
                    cusE.Text.Trim(' ') + "%'";
                }
                break;

        }
        viewlist.DataSource = customersDB;
        viewlist.DataBind();
    }// findcus

</script>

<html>
     <head>
         <title>Database Search</title>
         <link href="style2.css" rel="stylesheet" type="text/css" />
     </head>

     <body>
         <form runat="server">
             <div>
        
          <div class="header2">
                <h1 CssClass="head" runat="server"> Search Database</h1>
          </div>
         
        <table>
             <tr>
                <td colspan="2"> Please enter your ID number: <br/>
                 </td>
             </tr>

             <tr>
                <td class="text">
                    <asp:TextBox id="cusID" runat="server"
                    width = "100" ></asp:TextBox>
                    <asp:Label ID="EM1" Font-Name="Garamond"  ForeColor="#006600" runat="server" Height="50px" Width="550px"/>
                </td>
                <td>

                 <asp:Button id="CustID" onclick="FindCus"
                    runat="server"
                    Text="Click to find Customer from ID number"
                    CssClass="" CommandName="CId" />
                </td>
             </tr>

             <tr>
             <td colspan="2"><b>or</b></td>
             </tr>

             <tr>
                <td colspan="2">Please enter part, or all, of the customer's name.<br/>
                </td>
             </tr>

             <tr>
             <td>
                 <asp:TextBox id="cusN" runat="server"
                 width = "200" ></asp:TextBox>
                 <asp:Label ID="EM2" Font-Name="Garamond"  ForeColor="#006600" runat="server" Height="50px" Width="550px"/>
            </td>
             <td>

             <asp:Button id="CusNM" onclick="FindCus"
                runat="server"
                Text="Click to find customer from name"
                CssClass="" CommandName="CName" />
             </td>
             </tr>

             <tr>
             <td colspan="2"><b>or</b></td>
             </tr>

             <tr>
                 <td colspan="2">Please enter part, or all, of the customer's email.<br/>
             </td>
             </tr>

             <tr>
             <td>
                <asp:TextBox id="cusE" runat="server"
                 width = "150" ></asp:TextBox>
                 <asp:Label ID="EM3" Font-Name="Garamond"  ForeColor="#006600" runat="server" Height="50px" Width="550px"/>
             </td>

             <td>
                <asp:Button id="CusEM" onclick="FindCus"
                    runat="server"
                    Text="Click to find customer from email"
                    CssClass="" CommandName="CEmail" />
             </td>
             </tr>
            <tr>
                <asp:Label ID="EM" Font-Name="Garamond"  ForeColor="#006600" runat="server" Height="50px" Width="550px"/>

            </tr>

            
         </table>
         <br /><br /><br />

         <asp:listView id="viewlist" runat="server">
         
             <ItemTemplate>

                 <table>
                 <tr>
                 <td>

                     <asp:Image ID="imgCover" runat="server"
                        ImageUrl='<%# Eval("customer_pic", "Images/{0}") %>'
                        CssClass="" />
                 </td>
         
                 <td>
                     <br>Customer ID:        <%# Eval("customer_id") %><br />
                        Customer Name:      <%# Eval("customer_name") %><br />
                        Customer Email:     <%# Eval("customer_email") %><br />
                        Customer Address:   <%# Eval("customer_address") %><br />
                        Customer Phone Number: <%# Eval("customer_phone") %><p />
                 </td>

                 </tr>

                 <tr>
                     <td colspan="2"><hr /></td>
                 </tr>

                 </table>

             </ItemTemplate>

         </asp:listView>
         </div>
        </form>

     </body>

</html>

