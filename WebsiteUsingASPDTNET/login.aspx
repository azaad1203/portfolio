<%@ Page Language="C#" Debug="true" %>

<script language="C#" runat="server">

    void Login_Authenticate(object sender, AuthenticateEventArgs e) 
    { 
      DS1.SelectCommand = "SELECT * FROM login WHERE user_id = '" + Login.UserName + 
        "' AND password = '" + Login.Password + "'"; 

      DS1.Select(DataSourceSelectArguments.Empty); 
    }
    private void CheckLogin(object sender, 
      SqlDataSourceStatusEventArgs e) 
    { 
      if (e.AffectedRows > 0) 
      { 
        FormsAuthentication.RedirectFromLoginPage(Login.UserName, 
          false); 
      } 
      else 
      { 
        Login.FailureText="Invalid Login"; 
      } 
     }
</script>

<html>
  <head>
    <title>Forms Authentication</title>
    <link href="~/App_Themes/SkinFileOne/StyleSheet.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <asp:AccessDataSource ID="DS1" runat="server" 
      DataFile="login.accdb" OnSelected="CheckLogin" />

    <form runat="server">

    <div class="login" id="login" style="background-color:aquamarine;
      height:250px; max-height:500px;
      width:500px; min-width:300px;
      border:2px solid blue;
      position:absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      margin: auto;" >

      <asp:Login ID="Login" runat="server"
        OnAuthenticate="Login_Authenticate" CssClass="login" 
        TitleText="<br />Please enter your details <br /> 
          below to login for this site.<br /><br />" 
        UserNameLabelText="Username:" 
        UserNameRequiredErrorMessage="Username required<p />" 
        PasswordLabelText="Password:" 
        PasswordRequiredErrorMessage="Password required" 
        Height = "250" Width = "330" 
        LoginButtonText="Click to login" DisplayRememberMe="false">
        <LabelStyle CssClass="loginText" /> 
        <TitleTextStyle CssClass="loginText" /> 
        <ValidatorTextStyle CssClass="loginValidator" />
      </asp:Login>
      <p />

      <asp:ValidationSummary id="vlSummary1" Font-Names="Arial" 
        Visible="true" CssClass="vldSummary" 
        runat="server" ValidationGroup="Login" 
        HeaderText="Please correct the following errors:" />

    </div>

    </form>

  </body>
</html>