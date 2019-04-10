<%@ Page Language="C#" MasterPageFile="~/Week3/MasterPage.master" StylesheetTheme="SkinFileOne" EnableEventValidation="false" %>

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
    <h1 style="margin-left:10px; font-style:italic; color:#ff9900;"> TreeView to SiteMapDataSource</h1>
    <hr style="background-color:#ff9900; height:2px;">

      <form id="sitem" >

            <asp:SiteMapDataSource ID="SiteMap_1" runat="server"/>

            <asp:TreeView ID="MyTreeView" SkinId="MSDN" ShowLines="false" DataSourceId="SiteMap_1" runat="server">
              <LevelStyles>
                <asp:TreeNodeStyle Font-Bold="True" Font-Size="10pt" ChildNodesPadding="5" />
                <asp:TreeNodeStyle Font-Underline="True" ChildNodesPadding="5" />
              </LevelStyles>
              <Databindings>
                <asp:TreeNodeBinding TextField="Title" NavigateUrlField="Url" />
              </Databindings>
            </asp:TreeView>

      </form>

</asp:Content>