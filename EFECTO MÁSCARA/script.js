/* Pegar en Módulo Imagen > Avanzado > CSS Personalizado 
> Elemento Principal
clip-path: circle(100px at center);*/

<script type="text/javascript">
var section = document.querySelector('#seccionCover');
window.addEventListener('scroll', function(){
	var value = window.scrollY;
	section.style.clipPath = "circle("+ value +"px at center)"
})
</script>