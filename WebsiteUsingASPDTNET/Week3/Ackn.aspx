<%@ Page Language="C#" %>

<!DOCTYPE html>

    <script language="C#" runat="server">  
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
        <div id="lbutton" style="position:absolute; right:0%;">
        <asp:button text="Logout" OnClick="Logout_Click" 
            runat="server"
            ToolTip = "Press to log out!"
            BackColor = "#00cc99"
            ForeColor ="Black" 
            BorderWidth = "2px"
            BorderStyle = "Ridge"
            BorderColor="#009933"
            Font-Name = "Calibre" 
            Font-Size = "Medium" 
            Font-Bold = "True"
            Height = "30" 
            Width = "90"
            />
    </div>
    <div>

        <h1>Acknowledgements</h1>

        <h3>All the sources material which is not my own, and which is either copyright free or for which I have permission to use: e.g. clip art; listed below</h3><br />
        <p style="text-align:left;">Monash<a id="A2" href="http://www.monash.edu/disclaimer-copyright" runat="server" style="font-weight:bold">&nbsp; disclaimer</a></p>
        <p>Assignment specification : <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl = "http://moodle.vle.monash.edu/mod/page/view.php?id=3321999" Text = "Link"></asp:HyperLink></p>

        <hr />

        <h3>Copyright free graphics</h3>

        <asp:Image ID="Image2" AlternateText="banner" ImageUrl="./pix/banner.jpg" runat="server" ImageAlign="Left" />
            <br />
        <asp:Image ID="Image1" AlternateText="logo" ImageUrl="./pix/logo.jpg" runat="server" ImageAlign="Left"/>
            <br />
        <asp:Image ID="logo2" AlternateText="logo" ImageUrl="./pix/logo2.jpg" runat="server" ImageAlign="Left" />
            <br />
        <asp:Image ID="Image3" AlternateText="banner" ImageUrl="./pix/banner_1.jpg" runat="server" ImageAlign="Left" />
            <br />
        <asp:Image ID="Image4" AlternateText="banner" ImageUrl="./pix/banner_3.jpg" runat="server" ImageAlign="Left" />
            <br />
        <asp:Image ID="Image5" AlternateText="banner" ImageUrl="./pix/banner_2.jpg" runat="server" ImageAlign="Left" />
    </div>
    </form>
</body>
</html>
