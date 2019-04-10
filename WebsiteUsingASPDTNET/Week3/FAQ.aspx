<%@ Page Language="C#" MasterPageFile="~/Week3/MasterPage.master" StylesheetTheme="SkinFileOne"  %>

<asp:Content ID="Content1"   ContentPlaceHolderID="ContentPlaceHolder1"   Runat="Server">

     <script language="C#" runat="server">
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
    </div>    <hr />

    <h1 style="font-style:italic; margin-left:10px; color:#ff9900;"> Frequently Asked Questions</h1>
    <hr style="background-color:#ff9900; height:2px;">

    <h3 style="font-style:italic; margin-left:10px; color:#ff9900;">Q: Can you tell me more about the organisation?</h3>
        <p style="margin-left:10px; text-align:left;">A: To put it in a nutshell …

        Autism advisory service is an incorporated organisation with a constitution, and a Management Committee.
        Our aim to provide a support service for people with a disability.
        Our aim is to endow and support people possibly to the greatest extent, over securing flexible links applicable to person’s situation.
        One of our purposes is that we will maximise the potential of people with disability. We will help them to function as independently as possible in their personal, and every possible social environments. </p>

    <h3 style="font-style:italic; margin-left:10px; color:#ff9900;">Q: What support I can get from the office?</h3>
    <p style="margin-left:10px; text-align:left;">A: The office team has the following members:

        A General Manager
        An assistant general manager
        Part-time Case Managers, a Payroll Officer, a Training Safety Advisor, a Quality System Officer, a Rehabilitation Coordinator
        A Bookkeeper
        Volunteers for Admin and Marketing purpose 
        Case Managers in here will supports both clients and workers. Since each client’s living issues can be exceptional in most of the cases the role of the coordinator will be different from client to client.

        111 Care is here to make every rational effort to make clients conscious of the service standard that we will provide. In addition, that our service is safe which respects client’s dignity and independence and is also open to client’s every need.

        On the basis of the capacity of the service access of the service will be set and given, in order to fulfil the need. 111 Care will make every planning by keeping in mind the clients need and by doing service evaluation.

        We believe that individual funding is the cost effective way for people with disability and in this way people can get more benefit in service. We calculate the value of funding of every client after client secure their funding. The funding is always the client’s property not for organisation.
	</p>

    <br /><br /><br />
</asp:content>
