<%@ Page Language="C#" MasterPageFile="~/Week3/MasterPage.master" StylesheetTheme="SkinFileOne" %>

<asp:Content ID="Content1"   ContentPlaceHolderID="ContentPlaceHolder1"   Runat="Server">
<html>

    <head>
        <link href="~/App_Themes/SkinFileOne/StyleSheet.css" rel="stylesheet" type="text/css" />

         <script language="C#" runat="server">
          void Logout_Click(object sender, EventArgs e) 
          { 
            FormsAuthentication.SignOut(); 
            Server.Transfer("~/login.aspx"); 
          }
     </script>
    
    </head>
    <body>

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
    <hr />
        <h1 style="margin-left:10px; font-style:italic; color:#ff9900;">Documentation</h1>
        <hr style="background-color:#ff9900; height:2px;">

    <table  id="doc">
        <tr>
            <td >
                <p>Name : Abdullah Al Azad </p>
                <p>Student ID : 27565580</p>
                <p>Unit : FIT 5032 Internet Application Development</p>
                <p>Unit Provider : Monash University, The Caulfield School of Information Technology</p>
                <p>Assignment Number : Credit Task</p>
                <p>Submission Date: 07/09/2016</p>
                <p>Tutors Name : Thejani Arachchi</p>
                <p>Email link to author : <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl = "aabd84@student.monash.edu" Text = "Email@"></asp:HyperLink></p>
                <p>Assignment specification : <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl = "http://moodle.vle.monash.edu/mod/page/view.php?id=3321999" Text = "Link"></asp:HyperLink></p>
                <p>The assignment can be corrected at any screen resolution of 1024 x 768 or higher. </p>
            </td>

        </tr>

    </table>


    </body>
</html>

    </asp:Content>