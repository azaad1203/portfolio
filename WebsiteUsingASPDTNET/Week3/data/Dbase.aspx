<%@ Page Language="C#" %>

<asp:accessdatasource runat="server" id="dsAccess" 
  DataFile="database1.accdb" 
  SelectCommand="SELECT * FROM Product_details" />

<script runat="server">
   
</script>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Product Details</title>

    <style type="text/css">
        .Grid {background-color: #fff; margin: 5px 0 10px 0; border: solid 1px #525252; border-collapse:collapse; font-family:Calibri; color: #474747;}
        .Grid td {
              padding: 2px;
              border: solid 1px #c1c1c1; }
        .Grid th  {
              padding : 4px 2px;
              color: #fff;
              background: #363670 url(grid-header.png) repeat-x top;
              border-left: solid 1px #525252;
              font-size: 0.9em; }
        .Grid .alt {
              background: #fcfcfc url(grid-alt.png) repeat-x top; }
        .Grid .pgr {background: #363670 url(grid-pgr.png) repeat-x top; }
        .Grid .pgr table { margin: 3px 0; }
        .Grid .pgr td { border-width: 0; padding: 0 6px; border-left: solid 1px #666; font-weight: bold; color: #fff; line-height: 12px; }  
        .Grid .pgr a { color:#ccffff; text-decoration: none; }
        .Grid .pgr a:hover { color: #000; text-decoration: none; }
        

    </style>
</head>
<body>

   <div style="position:absolute; padding:15px; height:auto; width:1000px; background-color:#ffebcc;  ">
       <div style="border-left: 6px solid #1a1aff;
    background-color:#cce0ff;">
    <h1 style="text-align:center; font-family:'Bauhaus 93'; color:blue;"> Product Details</h1>
    </div>
    <form id="form1" runat="server">
        <div style="position:relative; margin-left:200px; margin-top:50px; background-color:">
      <asp:GridView ID="gvProducts" runat="server" Width="600px"
                      AllowPaging="true" PageSize="8" CssClass="Grid"                    
                      AlternatingRowStyle-CssClass="alt"
                      PagerStyle-CssClass="pgr" DataSourceID="dsAccess"  />
        </div>
    </form>
    
    </div> 
</body>
</html>
