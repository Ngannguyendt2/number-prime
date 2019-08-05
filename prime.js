let number=parseInt(prompt("Number:"));
let N=2,flag=true;

    for(N;N<=number;N++)
    {
        for(i=2;i<N;i++)
        {
            if(N%i==0)
            {
                document.write(N +"is not prime");
                document.write("<br>");
                flag=false;
                break;
            }
            else {
                flag=true;
            }

        }
        if(flag==true)
        {

            document.write(N +"is prime");
            document.write("<br>");


        }
    }

