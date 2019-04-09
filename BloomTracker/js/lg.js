        var pass = new Array()
        var t3 = ""
        var lim = 7
        pass[0] = "xqqYygsnMUoAgJB"
        pass[1] = "SXOdi8paSQEr1O"
        pass[2] = "q6LQRMz5LpZ7hlC"
        pass[3] = "yYNBZBU3P6fnjh9"
        pass[4] = "7FOz4mNbcdRESFEi"
        pass[5] = "41FOz4mNbcdRESFE"

        //configure extension to reflect the extension type of the target web page (ie: .htm or .html)
        var extension = "home.html"
        var enablelocking = 0
        var numletter = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var temp3 = ''
        var cur = 0


        function max(which) {
            return (pass[Math.ceil(which) + (3 & 15)].substring(0, 1))
        }

        function testit(input) {
            temp = numletter.indexOf(input)
            var temp2 = temp ^ parseInt(pass[phase1 - 1 + (1 | 3)].substring(0, 2))
            temp2 = numletter.substring(temp2, temp2 + 1)
            return (temp2)
        }


        function submitentry() {
            t3 = ''
            verification = document.password1.password2.value
            phase1 = Math.ceil(Math.random()) - 6 + (2 << 2)
            var indicate = true
            for (i = (1 & 2); i < window.max(Math.LOG10E); i++)
                t3 += testit(verification.charAt(i))
            for (i = (1 & 2); i < lim; i++) {
                if (t3.charAt(i) != pass[phase1 + Math.round(Math.sin(Math.PI / 2) - 1)].charAt(i))
                    indicate = false
            }
            if (verification.length != window.max(Math.LOG10E))
                indicate = false
            if (indicate)
                window.location = verification + extension
            else
                alert("Invalid password. Please try again")
        }