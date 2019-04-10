<%@ Import Namespace="System.Net.Mail" %>
<%@ Import Namespace="System.Net" %>
<%@ Page Language="C#" Debug="true" %>

<script Language="c#" runat="server">

    public void SendEmail(object sender, EventArgs e)
    {
        MailMessage newMsg = new MailMessage();

        foreach (GridViewRow gvRow in gvCustomers.Rows)
        {
            CheckBox cb = (CheckBox)gvRow.FindControl("chkEmail");

            if (cb != null && cb.Checked)
            {
                newMsg.To.Add(new MailAddress(gvRow.Cells[2].Text,
                gvRow.Cells[1].Text + " " + gvRow.Cells[4].Text));
            }
        }

        newMsg.From = new MailAddress("aabd84@student.monash.edu","Abdullah");
        newMsg.Subject = txtSubject.Text;
        newMsg.Body = txtMsg.Text;

        try
        {
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.monash.edu.au";
            smtp.Send(newMsg);
            lblMail.Text = "<b>Mail Successfully Sent <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src='mss3.jpg'> </b>";
        }
        catch (Exception exc)
        {
            lblMail.Text = exc.Message;
        }
    }
</script>

<html>
  <head>
    <title>Send Email</title>
        <link rel="stylesheet" href="style.css" type="text/css" />
  </head>
<body>
    

  <form id="Form1" method="post" runat="server" >

      <div class="header">

          <div class="header2">
                <h1 CssClass="head" runat="server"> Sendi Email to Customers</h1>

          </div>

         <asp:AccessDataSource ID="send_email" runat="server" 
              DataFile="CustomerDB.accdb" 
              SelectCommand="SELECT customer_id, customer_name, customer_email, customer_address, customer_phone, customer_pic FROM customers">
         </asp:AccessDataSource>
    

                <asp:GridView ID="gvCustomers" runat="server" 
                  DataSourceID="send_email" DataKeyNames="customer_id"
                  AutoGenerateColumns="false" 
                  RowStyle-CssClass="customerRow" 
                  AlternatingRowStyle-CssClass="customerAlternate" 
                  HeaderStyle-CssClass="customerHeader" 
                  CssClass="Grid" CellPadding="5">

                  <Columns>
                    <asp:BoundField DataField="customer_id" Visible="false" />
                    <asp:BoundField DataField="customer_name" HeaderText="Customer Name" />
                    <asp:BoundField DataField="customer_address" HeaderText="Customer's Address" />
                    <asp:BoundField DataField="customer_email" HeaderText="Email" />

                    <asp:TemplateField HeaderText="Select"> 
                      <ItemTemplate>
                        <asp:CheckBox runat="server" id="chkEmail" /> 
                      </ItemTemplate> 
                    </asp:TemplateField>
                    <asp:Imagefield DataImageUrlField="customer_pic" 
                         HeaderText="Customer's Photo" InsertVisible="False" ReadOnly="True" />

                  </Columns>
                </asp:GridView>
          </div>

    <br />

    <div class="tablev">

    <table class="emailTable">
    <tr class="tr">
      <td class="emailHeader" width="15%">From</td>
      <td class="emailRow">Abdullah Azad</td>
    </tr>
    <tr class="tr">
      <td class="emailHeader" width="15%">Subject</td>
      <td class="emailRow">
        <asp:TextBox ID="txtSubject" Width="800" runat="server" />
      </td>
    </tr>
    <tr class="tr">
      <td class="emailHeader">Message</td>
      <td class="emailRow">
        <asp:TextBox runat="server" ID="txtMsg" TextMode="MultiLine" Columns="55" Rows="15" width="800"/><br />
          <asp:RequiredFieldValidator ID="vLName" ControlToValidate="txtMsg" Display="Dynamic" ErrorMessage="Please Enter message content"  Font-Name="Garamond" Font-Size="Small" ForeColor="#FFFFFF" runat="server"/><br />
      </td>
    </tr>
    </table>
    <br />
    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<asp:Button id="SendMail" runat="server" ToolTip = "Press to send email"
      OnClick="SendEmail" Text="Send Email" BackColor = "#00cc99"
                       ForeColor ="Black" 
                      BorderWidth = "0"
                       BorderStyle = "Ridge"
                       Font-Name = "Garamond" 
                      Font-Size = "12" 
                      Font-Bold = "True"
                       Height = "50" 
                      Width = "450"/>
        <br /><br />
    </div>

    <br />

      <div class="mss">
      
      <asp:label id="lblMail" CssClass="error" runat="server" />
    <p /> 
      </div>

  </form>
</body>
</html>