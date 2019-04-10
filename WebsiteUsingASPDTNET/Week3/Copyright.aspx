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


        <h1>Disclaimer and Copyright</h1>
        <p>This is a personal page published by the author. The ideas and information expressed on it have not been approved or 
        authorised by Monash University either explicitly or implicitly. In no event shall Monash University be liable for any damages whatsoever 
        resulting from any action arising in connection with the use of this information or its publication, including any action for infringement 
        of copyright or defamation.</p>

        <h2>All the text has been used in this website</h2>

        <p style="margin-left:10px;">Autism Advisory Service (AAS) was established in 2000 by a group of parents from Melbourne to fill the void in the health care sector encountered by families of children with Autism.

        AAS was established as a support and network and advisory service to empower children with Autism and their families through knowledge and support, and to positively impact and influence their children's social and emotional development

        AAS  has the legal status as a not for profit incorporated charity. AAS relies on funding grants, donations and sponsorships to meet its operational costs. Despite these financial obstacles AAS has grown in size and been able to expand its range of service delivery.</p>

        <p style="margin-left:10px;">Since its inception AAS has expanded and achieved the following: </p>

        <ul style="margin-left:10px;">
               &nbsp; <li>Now assist families, carers and professionals from Melbourne, around Australia and overseas</li>
                &nbsp;<li>Opened the AAS Community House/drop in centre, located in Memorial Avenue, Sydney;</li>
                &nbsp;<li>Established, coordinated and hosts support groups;</li>
                &nbsp;<li>Established, coordinated and hosts respite programs;</li>
                &nbsp;<li>Established and run a sensory toy and resource shop with affordable prices</li>
                &nbsp;<li>Runs a parent library and toy library;</li>
               &nbsp; <li>Established, coordinated and facilites Australia's only 24 hour Autism Hotline</li>
               &nbsp; <li>Individual advocacy</li>
               &nbsp; <li>Organise and run workshops, seminars and other information and Autism awareness programs</li>
               &nbsp; <li>Are called to be key note speakers at conferences and do ad hoc Autism training</li>
        </ul>
        <p style="margin-left:10px;">AAS continues to provide these services free or at a nominal fee to the parents and carers of children with ASD at at an affordable fee to service providers. It handles approximately 200 enquiries/cases per month.

        If you would like to help us by either volunteering your time or donating please Contact Us

        Incorporation
        Autism Advisory and Support Service Inc ABN 63 070 680 080 is a not for profit incorporated association. Its members are the current Committee. Its registered office is located at 99 Memorial Avenue, Sydney NSW 2171.</p>

        <hr />
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

        <hr />

        <p style="text-align:center;" >Email link to the page author and server webmaster <asp:HyperLink ID="HyperLink3" runat="server" NavigateUrl = "aabd84@student.monash.edu" Text = "Email@"></asp:HyperLink></p>
        <br />
        <hr style="color:blue;height:2px;"/>
        <p style="text-align:center;">Personal Page<a id="A1" href="~/Week3/page_disclaimer.aspx" runat="server" style="font-weight:bold"> &nbsp;disclaimer</a></p> 
        
        <p style="text-align:center;">Monash<a id="A2" href="http://www.monash.edu/disclaimer-copyright" runat="server" style="font-weight:bold">&nbsp; disclaimer</a>

        <hr />

        <h2>Graphics has been used in this website</h2>

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
