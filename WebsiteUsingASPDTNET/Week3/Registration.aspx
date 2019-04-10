<%@ Page Language="C#" MasterPageFile="~/Week3/MasterPage.master" StylesheetTheme="SkinFileOne" EnableEventValidation="false" %>

<%@ Import Namespace="System.Data" %>
<%@ Import Namespace="System.Data.OleDb" %>

<asp:Content ID="Content1"   ContentPlaceHolderID="ContentPlaceHolder1"   Runat="Server">

<script language="c#" runat="server">

       private void Logout_Click(object sender, EventArgs e) 
          { 
            FormsAuthentication.SignOut(); 
            Server.Transfer("~/login.aspx"); 
          }

    private void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack) 
        {
            // Validate initially to force asterisks
            // to appear before the first roundtrip.
            return;
        }
   
	    else
	    {
            message1.Text = "";
            message2.Text = "";
            message3.Text = "";
            message4.Text = "";
            message5.Text = "";
            message6.Text = "";
            message7.Text = "";
            
                message1.Text = "Your first name is: "
                  + FName.Text;
            
                message2.Text = "You middle name is: "
                  + MName.Text;
            
                message3.Text = "Your last name is : "
                  + LName.Text;
          
                message4.Text = "Your email is : "
                  + Email.Text;

                message5.Text = "Your web URL is : "
                    + Url.Text;
            
                message6.Text = "Your address is : "
                  + Addr.Text;
            
                message7.Text = "Your Post code is : "
                  + Post.Text;
            
                message8.Text = "Your state is : "
                  + State.Text;
            // method list check
                Listbox.Text = "Your religion is : " +
                    ListBox_1.SelectedItem.Text.ToString();
            //method radio button
                if (RadioButton1.Checked == true)
                {
                    Rad.Text = "Your gender is : " +
                        RadioButton1.Text;
                }
                else
                {
                    Rad.Text = "Your selected item is : " +
                        RadioButton2.Text;
                }
            // method check box
                if (CheckBox1.Checked == true)
                {
                    check.Text = "You have agreed to terms and conditions. ";
                    check.ForeColor = System.Drawing.Color.Green;
                }
                else
                {
                    check.Text = "You have not agreed to terms and conditions! ";
                    check.ForeColor = System.Drawing.Color.Crimson;
                }
                
            }
        
    }

    
</script>
<html>
<head>
    <title></title>
<style class="text/css">
    .lblMsg{
        background-color: #e6e6e6;
        border-bottom-color:aliceblue;
    }
</style>

</head>
<body>
    

    <form id="main" style="font-family:Garamond; font-size:20px">

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
        <br /><br />
        <hr />

        <div class="headR" style="border-left: 6px solid #ff9900; background-color:#ffe0b3;">

        <h1 style="font-style:italic; margin-left:10px; color:#ff9900; font-size:20px">
             <a id="A1" href="~/Week3/Database/list.aspx" target="_blank" runat ="server" style="font-weight:normal"> 
                 Click here 
             </a> to add record to database and see database
        </h1>
        </div>
        <div style="border-left: 6px solid #ff9900; background-color:#ffe0b3;">
            <h1 style="font-style:italic; margin-left:10px; color:#ff9900; font-size:20px">
                <a id="A3" href="~/Week3/Database/dbview.aspx" target="_blank" runat="server" style="font-weight:normal">
                    Click here
                </a> to view database
            </h1>
        </div>
        <div style="border-left: 6px solid #ff9900; background-color:#ffe0b3;">

        <h1 style="font-style:italic; margin-left:10px; color:#ff9900; font-size:20px"> 
            <a id="A2" href="~/Week3/Database/search.aspx" target="_blank" runat="server" style="font-weight:normal">
                 Click here 
             </a> to search database
        </h1>
        </div>
        <div style="border-left: 6px solid #ff9900; background-color:#ffe0b3;">

        <h1 style="font-style:italic; margin-left:10px; color:#ff9900; font-size:20px"> 
            <a id="A4" href="~/Week3/Data/Email.aspx" target="_blank" runat="server" style="font-weight:normal">
                 Click here 
             </a> send email to customers
        </h1>
        </div>


        <h1 style="font-style:italic; margin-left:10px; color:#ff9900;"> Registration Form </h1>

        <div style="position:absolute; margin-left:20px; margin-top:20px; box-shadow: 10px 10px 5px #888888; border:double; height:auto">
                    
            <br />

	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:Label ID="lblFName" Font-Bold="true" Font-Name="Arial" Text="First Name:"  runat="server" ForeColor="Blue"/> <br />
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:TextBox id="FName" Columns="50" runat="server" ToolTip="Enter First name please" Width="550px" Height="30px" BorderStyle="Ridge" BorderColor="#aaffc6"/>  <br />	
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:RequiredFieldValidator ID="vFName" ControlToValidate="FName" Display="Dynamic" ErrorMessage="Please Enter First Name"  Font-Name="Garamond" ForeColor="#FF0000" runat="server" Font-Size="Small"/> <br />
            <%-- ------------------------------------------------mname----------------------------------------------------------------------------------  --%>            
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:Label ID="lblMName" Font-Bold="true" Font-Name="Arial" Text="Middle Name:"  runat="server" ForeColor="Blue"/><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:TextBox id="MName" Columns="50" runat="server" ToolTip="Enter Middle name please" Width="550px" Height="30px" BorderStyle="Ridge" BorderColor="#aaffc6"/> <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:RequiredFieldValidator ID="VMName" ControlToValidate="MName" Display="Dynamic" ErrorMessage="Please Enter Middle Name"  Font-Name="Garamond" ForeColor="#FF0000" runat="server" Font-Size="Small"/><br />
            <%-- ------------------------------------------------Lname----------------------------------------------------------------------------------  --%>
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:Label ID="lblLName" Font-Bold="true" Font-Name="Arial" Text="Last Name:"  runat="server" ForeColor="Blue"/><br />
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:TextBox id="LName" Columns="50" runat="server" ToolTip="Enter Lasst name please" Width="550px" Height="30px" BorderStyle="Ridge" BorderColor="#aaffc6"/><br />
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:RequiredFieldValidator ID="vLName" ControlToValidate="LName" Display="Dynamic" ErrorMessage="Please Enter Last Name"  Font-Name="Garamond" Font-Size="Small" ForeColor="#FF0000" runat="server"/><br />	
            <%-- ------------------------------------------------EMAIL----------------------------------------------------------------------------------  --%>
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:Label ID="lblEmail" Font-Bold="true" Font-Name="Arial" Text="Email Address:" ForeColor="Blue" runat="server"/><br />
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:TextBox id="Email" Columns="50" runat="server" ToolTip="Enter Emaid id please" Width="550px" Height="30px" BorderStyle="Ridge" BorderColor="#aaffc6"/><br />
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:RequiredFieldValidator ID="vEmail" ControlToValidate="Email" Display="Dynamic" ErrorMessage="Please Enter an Email Address"  Font-Name="Garamond" Font-Size="Small" ForeColor="#FF0000" runat="server"/><br />
	        <%-- ------------------------------------------------CEMAIL----------------------------------------------------------------------------------  --%>
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:Label ID="lblreEmail" Font-Bold="true" Font-Name="Arial" Text="Confirm Email Address:" ForeColor="Blue" runat="server"/><br />
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:TextBox ID="reEmail" Columns="50" runat="server" ToolTip="Confirm email id please" Width="550px" Height="30px" BorderStyle="Ridge" BorderColor="#aaffc6"/><br />	
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:RequiredFieldValidator ID="vreEmail" ControlToValidate="reEmail" Display="Dynamic" ErrorMessage="Please re-Enter an Email Address"  Font-Name="Garamond" Font-Size="Small" ForeColor="#FF0000" runat="server"/><br />
	
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:RegularExpressionValidator ID="regEmail" ControlToValidate="Email" Display="Dynamic" ValidationExpression=".*@.*\..*" ErrorMessage="Please Enter a Valid Email Address"  Font-Name="Garamond" Font-Size="Small" ForeColor="#FF0000" runat="server"/><br />	
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:CompareValidator ID="comEmail" ControlToCompare="Email" ControlToValidate="reEmail" Display="Dynamic" ErrorMessage="Email Address Don't Match"  Font-Name="Garamond" Font-Size="Small" ForeColor="#FF0000" runat="server"/><br />
	       <%-- ------------------------------------------------Your website------------------------example of valid url = http://www.microsoft.com----------------------------------------------------------  --%>
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:Label ID="lblWebsite" Font-Bold="true" Font-Name="Arial" Text="Enter your website URL please (optional) :" ForeColor="Blue" runat="server"/><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:TextBox id="Url" Columns="50" runat="server" ToolTip="Enter web URL please" Width="550px" Height="30px" BorderStyle="Ridge" BorderColor="#aaffc6"/><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:RegularExpressionValidator ID="VUrl" ControlToValidate="Url" Display="Dynamic" ValidationExpression="^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$" ErrorMessage="Please Enter a Valid URL please!"  Font-Name="Garamond" Font-Size="Small" ForeColor="#FF0000" runat="server"/><br />
             <%-- ------------------------------------------------Religion listbox----------------------------------------------------------------------------------  --%>
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:Label ID="lblReligion" Font-Bold="true" Font-Name="Arial" Text="Select Your Religion" ForeColor="Blue" runat="server"/><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:ListBox ID="ListBox_1" runat="server" AutoPostBack="false" Font-Size="Large" Font-Names="Arial" Rows="5" ForeColor="Tomato" Width="350"
                                                OnSelectedIndexChanged="Page_Load" >
                                                <asp:ListItem>Christianity</asp:ListItem>
                                                <asp:ListItem>Islam</asp:ListItem>
                                                <asp:ListItem>Hinduism</asp:ListItem>
                                                <asp:ListItem>Buddhism</asp:ListItem>
                                                <asp:ListItem>Sikhism</asp:ListItem>
                                                <asp:ListItem>paganism</asp:ListItem>
                                                <asp:ListItem>Other</asp:ListItem>
                                        </asp:ListBox>
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:RequiredFieldValidator ID="RequiredFieldValidator1" ControlToValidate="ListBox_1" Display="Dynamic" ErrorMessage="Please select your religion!"  Font-Name="Garamond" ForeColor="#FF0000" runat="server" Font-Size="Small"/><br />
            <%-- ------------------------------------------------Gender----------------------------------------------------------------------------------  --%>
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:Label ID="lblGender" Font-Bold="true" Font-Name="Arial" Text="Select Your Gender" ForeColor="Blue" runat="server"/><br /><br />
                 &nbsp;&nbsp;&nbsp;&nbsp;<asp:RadioButton 
                                ID="RadioButton1" 
                                runat="server" 
                                Text="Male" 
                                GroupName="Software" 
                                AutoPostBack="false" 
                                OnCheckedChanged="Page_Load"
                                Font-Bold="true"
                                Font-Names="Arial"
                                Font-Size="Large"
                                ForeColor="Navy"
                                />
                            <asp:RadioButton 
                                ID="RadioButton2" 
                                runat="server" 
                                Text="Female"
                                GroupName="Software" 
                                AutoPostBack="false" 
                                OnCheckedChanged="Page_Load"
                                Font-Bold="true"
                                Font-Names="Arial"
                                Font-Size="Large"
                                ForeColor="Navy"
                                />
                    <br /><br />
            <%-- ------------------------------------------------ÀDDRESS----------------------------------------------------------------------------------  --%>
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:Label ID="lblAdd" Font-Bold="true" Font-Name="Arial" Text="Address" ForeColor="Blue" runat="server"/><br />
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:TextBox id="Addr" Columns="50" runat="server" Rows="3" ToolTip="Enter Address please" TextMode="MultiLine"  Wrap="true" Width="550px" Height="30px" BorderStyle="Ridge" BorderColor="#aaffc6"/><br />	
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:RequiredFieldValidator ID="vAddr" ControlToValidate="Addr" Display="Dynamic" ErrorMessage="Please Enter An Address"  Font-Name="Garamond" Font-Size="Small" ForeColor="#FF0000" runat="server"/><br />
	    <%-- ------------------------------------------------POSTCODE----------------------------------------------------------------------------------  --%>
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:Label ID="lblPost" Font-Bold="true" Font-Name="Arial" Text="Postcode" ForeColor="Blue" runat="server"/>
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:TextBox id="Post" Columns="50" runat="server" ToolTip="Enter postcode please" Height="30px" BorderStyle="Ridge" BorderColor="#aaffc6"/>
	        <%-- ------------------------------------------------STATE----------------------------------------------------------------------------------  --%>
	            <asp:Label ID="lblState" Font-Bold="true" Font-Name="Arial" Text="State" ForeColor="Blue" runat="server"/>
	            <asp:DropDownList id="State" runat="server" ToolTip="Select a state please" Height="30px" BorderStyle="Ridge" BorderColor="#aaffc6">
		            <asp:ListItem Text="ACT" Value="ACT"/>
		            <asp:ListItem Text="NT" Value="NT"/>
		            <asp:ListItem Text="NSW" Value="NSW"/>
		            <asp:ListItem Text="QLD" Value="QLD"/>
		            <asp:ListItem Text="SA" Value="SA"/>
		            <asp:ListItem Text="WA" Value="WA"/>
		            <asp:ListItem Text="TAS" Value="TAS"/>
		            <asp:ListItem Text="VIC" Value="VIC" Selected="true"/>
	            </asp:DropDownList>
	            <br />
	
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:RequiredFieldValidator ID="vPost" ControlToValidate="Post" Display="Dynamic" ErrorMessage="Please Enter a Postcode"  Font-Name="Garamond" Font-Size="Small" ForeColor="#FF0000" runat="server"/>
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:RangeValidator ID="rgPost" ControlToValidate="Post" MinimumValue="1000" MaximumValue="9999" Type="Integer" Display="Dynamic" ErrorMessage="Please Enter a Valide Postcode"  Font-Name="Garamond" Font-Size="Small" ForeColor="#FF0000" runat="server"/><br />	
	    <%-- ---------------------------------------------------------------checkbox----------------------------------------------------------------------------------  --%>
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:Label ID="lblCbox" Font-Bold="true" Font-Name="Arial" Text="Tick the box below to agree to terms and consitions " ForeColor="Blue" runat="server"/><br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:CheckBox 
                                ID="CheckBox1" 
                                runat="server" 
                                Text="I agree to terms and conditons" 
                                OnCheckedChanged="Page_Load" 
                                AutoPostBack="false"
                                Font-Names="Serif"
                                Font-Size="Large"
                                /><br /><br />
            
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<asp:Button ID="btnSub" OnClick="Page_Load" Text="Submit" runat="server" ToolTip = "Press the button to submit form"
                                  BackColor = "#00cc99"
                                   ForeColor ="Black" 
                                  BorderWidth = "2px"
                                   BorderStyle = "Ridge"
                                   BorderColor="#009933"
                       
                                   Font-Name = "Arial" 
                                  Font-Size = "Medium" 
                                  Font-Bold = "True"
                                   Height = "50" 
                                  Width = "550"/>
	            <br /><br />
	            &nbsp;&nbsp;&nbsp;&nbsp;<asp:Label ID="message1" Font-Name="Garamond"  ForeColor="#006600" runat="server" Height="50px" Width="550px"/><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:label id="message2" Font-Name="Garamond"  ForeColor="#006600" runat="server" Height="50px" Width="550px"/><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:label id="message3" Font-Name="Garamond"  ForeColor="#006600" runat="server" Height="50px" Width="550px"/><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:label id="message4" Font-Name="Garamond"  ForeColor="#006600" runat="server" Height="50px" Width="550px"/><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:label id="message5" Font-Name="Garamond"  ForeColor="#006600" runat="server" Height="50px" Width="550px"/><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:label id="Listbox" Font-Name="Garamond"  ForeColor="#006600" runat="server" Height="50px" Width="550px"/><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:label id="Rad" Font-Name="Garamond"  ForeColor="#006600" runat="server" Height="50px" Width="550px"/><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:label id="message6" Font-Name="Garamond"  ForeColor="#006600" runat="server" Height="50px" Width="550px"/><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:label id="message7" Font-Name="Garamond"  ForeColor="#006600" runat="server" Height="50px" Width="550px"/><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:label id="message8" Font-Name="Garamond"  ForeColor="#006600" runat="server" Height="50px" Width="550px"/><br />              
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:label id="check" Font-Name="Garamond"  ForeColor="#006600" runat="server" Height="50px" Width="550px"/><br />
                <br /><br /><br /><br />
            </div>
    </form>



</body>
</html>

</asp:Content>