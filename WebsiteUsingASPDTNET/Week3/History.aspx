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

    <h1 style="font-style:italic; margin-left:10px; color:#ff9900;"> Our Hostiry</h1>
    <hr style="background-color:#ff9900; height:2px;">


    <p style="margin-left:10px; text-align:left;">During the 1960s little was known by human about autism, and little was cared. Had only been globally familiar as a neurological condition even roughly 
        24 years back. In Australia, there was almost no or very little info or support available for children with autism. With a 
        child with autism, and the struggle of the isolation of autism, in 1956 Anderson and Meghna Bond and few other families had started The 
        Autism advisory service Sydney, with the objective of providing support children with autism. </p>

    <p style="margin-left:10px; text-align:left;">By 1969, The Autism Advisory Service of Syney received government funding for the very first time. Moreover, Autism Advisory Service followed by an 
        age of potential development in the early 1971s which witnessed three educational institutions open in different part of Australia. </p>

    <p style="margin-left:10px; text-align:left;"> Improvement continued through the entire 1980s and 1990s. Many more schools were opened, Hide park (1985) and Iloa (1988). 
        The government acknowledged that people are more in need with disability with the help of the disability service. </p>

    <p style="margin-left:10px; text-align:left;">In 1984, a name change to The Autistic Association of NSW heralded the beginning of a new direction, with the introduction of 
        services aimed at supporting adults with autism, and vocational services for school leavers. Over the next 20 years, services for people with autism 
        expanded to include advocacy support, parental support, school counsellor roles and early intervention services, to name a few.</p>

    <p style="margin-left:10px; text-align:left;">On January 16, 2006, an annual Meeting of the Autism Advisory Service of Sydney accepted a new constitution  
        to the Autism Continuum Australia. The new constitution recognises that autism is on a scale and there is analysis that sort out the autism scale. </p> 


</asp:content>
