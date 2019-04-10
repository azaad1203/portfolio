<%@ Page Language="C#" MasterPageFile="~/Week3/MasterPage.master" StylesheetTheme="SkinFileOne" %>
             
<asp:Content ID="Content1"   ContentPlaceHolderID="ContentPlaceHolder1"   Runat="Server">

    <script language="C#" runat="server">
  void Page_Load()
  {
    lblUser.Text = User.Identity.Name; 
    lblType.Text = User.Identity.AuthenticationType;
  }
  
  void Logout_Click(object sender, EventArgs e) 
  { 
    FormsAuthentication.SignOut(); 
    Server.Transfer("~/login.aspx"); 
  }
</script>
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

            <p style="padding:5px;">    Welcome, <asp:label id="lblUser" runat="server"/>, 
            to the Website;
            you have used <asp:label id="lblType" runat="server"/> 
            authentication to log in.
            </p> 
   
            
    <hr />

      <asp:AdRotator id="ar1" AdvertisementFile="ADR.xml" BorderWidth="1" runat=server />
      <br /><br />

    <fieldset style="">
            <legend style="font-weight:600;">Page was last modified on 10/09/2016</legend>

    <p style="text-align:center;" >Email link to the page author and server webmaster <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl = "aabd84@student.monash.edu" Text = "Email@"></asp:HyperLink></p>
        <br />
        <hr style="color:blue;height:2px;"/>
    <p style="text-align:center;">Personal Page<a id="A1" href="~/Week3/page_disclaimer.aspx" runat="server" style="font-weight:bold"> &nbsp;disclaimer</a></p> 
        
    <p style="text-align:center;">Monash<a id="A2" href="http://www.monash.edu/disclaimer-copyright" runat="server" style="font-weight:bold">&nbsp; disclaimer</a></p>
        
    <p style="text-align:center;">Copyright Notice<a id="A3" href="~/Week3/Copyright.aspx" runat="server" style="font-weight:bold"> &nbsp;LINK</a></p>
        
    <p style="text-align:center;">Acknowledgements<a id="A4" href="~/Week3/Ackn.aspx" runat="server" style="font-weight:bold"> &nbsp;LINK</a></p>    
    <br />

        </fieldset>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

</asp:Content>
