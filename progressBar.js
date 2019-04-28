<!DOCTYPE html>
<html>
<head>
	<title>progressBar</title>

	<style type="text/css">


		#myProgress{


			width: 100%;
			height: 20px;
			border: 1px solid #ccc ;
			position: relative;
		}

		#myBar{

			width: 10px;
			height: 100%;
			background-color: blue;
		    position: absolute;




		}

		
       


	</style>


	<script type="text/javascript">

		
		function Move(){

         var elem= document.getElementById("myBar");
         var width=10;
         var Id=setInterval(frame,10);

           function frame(){
               if (width==100) {

             	clearInterval(Id);


             }else{

             width++;
             elem.style.width=width+'%';


         }


         }



		}


	</script>
</head>
<body>

	<div id="myProgress">
	<div id="myBar"></div>

	</div>
	<br>
	<input type="button" name="clickme" id="clickme" value="click  me" onclick="Move();" >



</body>
</html>
