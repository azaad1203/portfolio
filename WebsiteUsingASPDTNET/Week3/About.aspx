<%@ Page Language="C#" MasterPageFile="~/Week3/MasterPage.master" StylesheetTheme="SkinFileOne" %>

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
    </div>
    <hr />

    &nbsp;<h1 style="font-style:italic; margin-left:10px; color:#ff9900;"> About Us</h1>
    <hr style="background-color:#ff9900; height:2px;">

    <p style="margin-left:10px;">Autism Advisory Service (AAS) was established in 2005 by a group of professionals from Sydney to fill up the emptiness in health care sector. Which is indeed encountered by children with Autism.

    AAS was established as a support and advisory service on that time to empower children with Autism and their families through right knowledge and support, and to positively impact and influence their children's social and emotional development.

    AAS has the legal status as a not for profit incorporated charity. AAS relies on funding grants, donations and sponsorships to meet its operational expenses. Despite these financial difficulties AAS has grown in size and been able to expand its range of service delivery.</p>

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
    <p style="margin-left:10px;">AAS continues to provide these services free or at a nominal fee to the parents and carers of children with ASD at an affordable cost to the service providers. It handles approximately 200 enquiries/cases per month.

    If you would like to help us by either volunteering your time or donating please Contact Us

    Incorporation
    Autism Advisory and Support Service Inc ABN 63 070 680 080 is a not for profit incorporated association. Its members are the current Committee. Its registered office is located at 99 The Green Way, Sydney NSW 2171.</p>

  </asp:Content>
