<%@ Page Language="C#" %>

<!DOCTYPE html>

<script runat="server">
  void Logout_Click(object sender, EventArgs e) 
  { 
    FormsAuthentication.SignOut(); 
    Server.Transfer("~/login.aspx"); 
  }
</script>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
         <asp:button text="Logout" OnClick="Logout_Click" 
            runat="server"/>
        <hr />
        <h1>Disclaimer and Copyright</h1>
        <p>This is a personal page published by the author. The ideas and information expressed on it have not been approved or 
        authorised by Monash University either explicitly or implicitly. In no event shall Monash University be liable for any damages whatsoever 
        resulting from any action arising in connection with the use of this information or its publication, including any action for infringement 
        of copyright or defamation.</p>
    </div>
    </form>
</body>
</html>
