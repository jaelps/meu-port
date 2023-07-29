


function textAnimate(){
    var areaTexto = document.getElementById('projetos_areaTextoAnimate')
    const ativAnim = window.innerHeight;
    const position = areaTexto.getBoundingClientRect().top;

    
    if (position <  ativAnim * 0.8){
            areaTexto.classList.add('active');
    
            /*p0*/
            var crirParagrafoZero = document.createElement('p')
            crirParagrafoZero.textContent = '< System >'
            crirParagrafoZero.className = 'paragrafo-container pSistema'
            areaTexto.appendChild(crirParagrafoZero)
    
            var statusSpanZero = document.createElement('span')
            statusSpanZero.textContent = ' Analisando ferramentas utilizadas'
            statusSpanZero.className = 'span-container pContainer'
            crirParagrafoZero.appendChild(statusSpanZero)
    
    
            /*paragrafo 1 */
            var crirParagrafoPrimeiro = document.createElement('p')
            crirParagrafoPrimeiro.textContent = '< System >'
            crirParagrafoPrimeiro.className = 'paragrafo-container pSistema'
            areaTexto.appendChild(crirParagrafoPrimeiro)
    
            var ferramentaSpanPrimeiro = document.createElement('span')
            ferramentaSpanPrimeiro.textContent = '[ Logica de Programação ] '
            ferramentaSpanPrimeiro.className = 'span-ferramenta'
            crirParagrafoPrimeiro.appendChild(ferramentaSpanPrimeiro)
    
            var statusSpanPrimeiro = document.createElement('span')
            statusSpanPrimeiro.textContent = ' concluido '
            statusSpanPrimeiro.className = 'span-status'
            crirParagrafoPrimeiro.appendChild(statusSpanPrimeiro)
    
            /*paragrafo 2 */
            var crirParagrafoSegundo = document.createElement('p')
            crirParagrafoSegundo.textContent = '< System >'
            crirParagrafoSegundo.className = 'paragrafo-container pSistema'
            areaTexto.appendChild(crirParagrafoSegundo)
    
            var ferramentaSpanSegundo = document.createElement('span')
            ferramentaSpanSegundo.textContent = '[ Git ] '
            ferramentaSpanSegundo.className = 'span-ferramenta'
            crirParagrafoSegundo.appendChild(ferramentaSpanSegundo)
    
            var statusSpanSegundo = document.createElement('span')
            statusSpanSegundo.textContent = ' concluido '
            statusSpanSegundo.className = 'span-status'
            crirParagrafoSegundo.appendChild(statusSpanSegundo)
    
            /*paragrafo 3 */
    
            var crirParagrafoTerceiro = document.createElement('p')
            crirParagrafoTerceiro.textContent = '< System >'
            crirParagrafoTerceiro.className = 'paragrafo-container pSistema'
            areaTexto.appendChild(crirParagrafoTerceiro)
    
            var ferramentaSpanTerceiro = document.createElement('span')
            ferramentaSpanTerceiro.textContent = '[ GitHub ] '
            ferramentaSpanTerceiro.className = 'span-ferramenta'
            crirParagrafoTerceiro.appendChild(ferramentaSpanTerceiro)
    
            var statusSpanTerceiro = document.createElement('span')
            statusSpanTerceiro.textContent = ' concluido '
            statusSpanTerceiro.className = 'span-status'
            crirParagrafoTerceiro.appendChild(statusSpanTerceiro)
    
            /*paragrafo 4 */
    
            var crirParagrafoQuarto = document.createElement('p')
            crirParagrafoQuarto.textContent = '< System >'
            crirParagrafoQuarto.className = 'paragrafo-container pSistema'
            areaTexto.appendChild(crirParagrafoQuarto)
    
            var ferramentaSpanQuarto = document.createElement('span')
            ferramentaSpanQuarto.textContent = '[ Responsive design ]'
            ferramentaSpanQuarto.className = 'span-ferramenta'
            crirParagrafoQuarto.appendChild(ferramentaSpanQuarto)
    
            var statusSpanQuarto = document.createElement('span')
            statusSpanQuarto.textContent = ' concluido '
            statusSpanQuarto.className = 'span-status'
            crirParagrafoQuarto.appendChild(statusSpanQuarto)
    
            /*paragrafo 5 */
    
            var crirParagrafoQuinto = document.createElement('p')
            crirParagrafoQuinto.textContent = '< System >'
            crirParagrafoQuinto.className = 'paragrafo-container pSistema'
            areaTexto.appendChild(crirParagrafoQuinto)
    
            var ferramentaSpanQuinto = document.createElement('span')
            ferramentaSpanQuinto.textContent = '[ Html5 ] '
            ferramentaSpanQuinto.className = 'span-ferramenta'
            crirParagrafoQuinto.appendChild(ferramentaSpanQuinto)
    
            var statusSpanQuinto = document.createElement('span')
            statusSpanQuinto.textContent = ' concluido '
            statusSpanQuinto.className = 'span-status'
            crirParagrafoQuinto.appendChild(statusSpanQuinto)
    
            /*paragrafo 6 */
    
            var crirParagrafoSexto = document.createElement('p')
            crirParagrafoSexto.textContent = '< System >'
            crirParagrafoSexto.className = 'paragrafo-container pSistema'
            areaTexto.appendChild(crirParagrafoSexto)
    
            var ferramentaSpanSexto = document.createElement('span')
            ferramentaSpanSexto.textContent = '[ Css3 ] '
            ferramentaSpanSexto.className = 'span-ferramenta'
            crirParagrafoSexto.appendChild(ferramentaSpanSexto)
    
            var statusSpanSexto = document.createElement('span')
            statusSpanSexto.textContent = ' concluido '
            statusSpanSexto.className = 'span-status'
            crirParagrafoSexto.appendChild(statusSpanSexto)
    
            /*paragrafo 7 */
    
            var crirParagrafoSetimo = document.createElement('p')
            crirParagrafoSetimo.textContent = '< System >'
            crirParagrafoSetimo.className = 'paragrafo-container pSistema'
            areaTexto.appendChild(crirParagrafoSetimo)
    
            var ferramentaSpanSetimo = document.createElement('span')
            ferramentaSpanSetimo.textContent = '[ Boodstrap ] '
            ferramentaSpanSetimo.className = 'span-ferramenta'
            crirParagrafoSetimo.appendChild(ferramentaSpanSetimo)
    
            var statusSpanSetimo = document.createElement('span')
            statusSpanSetimo.textContent = ' concluido '
            statusSpanSetimo.className = 'span-status'
            crirParagrafoSetimo.appendChild(statusSpanSetimo)
    
            /*paragrafo 8 */
    
            var crirParagrafoOitavo = document.createElement('p')
            crirParagrafoOitavo.textContent = '< System >'
            crirParagrafoOitavo.className = 'paragrafo-container pSistema'
            areaTexto.appendChild(crirParagrafoOitavo)
    
            var ferramentaSpanOitavo = document.createElement('span')
            ferramentaSpanOitavo.textContent = '[ JavaScript ] '
            ferramentaSpanOitavo.className = 'span-ferramenta'
            crirParagrafoOitavo.appendChild(ferramentaSpanOitavo)
    
            var statusSpanOitavo = document.createElement('span')
            statusSpanOitavo.textContent = ' concluido '
            statusSpanOitavo.className = 'span-status'
            crirParagrafoOitavo.appendChild(statusSpanOitavo)
    
            /*paragrafo 9 */
    
            var crirParagrafoNono = document.createElement('p')
            crirParagrafoNono.textContent = '< System >'
            crirParagrafoNono.className = 'paragrafo-container pSistema'
            areaTexto.appendChild(crirParagrafoNono)
    
            var ferramentaSpanNono = document.createElement('span')
            ferramentaSpanNono.textContent = '[ Python ] '
            ferramentaSpanNono.className = 'span-ferramenta'
            crirParagrafoNono.appendChild(ferramentaSpanNono)
    
            var statusSpanNono = document.createElement('span')
            statusSpanNono.textContent = ' em desenvolvimento '
            statusSpanNono.className = 'span-status'
            crirParagrafoNono.appendChild(statusSpanNono)
    
            /*paragrafo 10 */
    
            var crirParagrafoDecimo = document.createElement('p')
            crirParagrafoDecimo.textContent = '< System >'
            crirParagrafoDecimo.className = 'paragrafo-container pSistema'
            areaTexto.appendChild(crirParagrafoDecimo)
    
            var ferramentaSpanDecimo = document.createElement('span')
            ferramentaSpanDecimo.textContent = '[ React ] '
            ferramentaSpanDecimo.className = 'span-ferramenta'
            crirParagrafoDecimo.appendChild(ferramentaSpanDecimo)
    
            var statusSpanDecimo = document.createElement('span')
            statusSpanDecimo.textContent = ' em desenvolvimento '
            statusSpanDecimo.className = 'span-status em-andamento'
            crirParagrafoDecimo.appendChild(statusSpanDecimo)

            window.removeEventListener('scroll', textAnimate);
    
            /*var statusCSpan = document.createElement('span')
            statusCSpan.textContent = statusC
            var spanContainerC = document.getElementById('container-span-C')
            spanContainerC.appendChild(statusCSpan)
    
    
            var statusESpan = document.createElement('span')
            statusESpan.textContent = statusE 
            var spanContainerE = document.getElementById('container-span-E')
            spanContainerE.appendChild(statusESpan)
    
            var crirParagrafo = document.createElement('p')
            crirParagrafo.textContent = `${maiorQ}Logica de programação${menorQ} ${statusCSpan}`
            var paragrafoContainer = document.getElementById('paragrafo-container')
            paragrafoContainer.appendChild(areaTexto)*/
    
            /*areaTexto.innerHTML = `<p>Verificando Ferramentas e Conhecimento</p>`
            areaTexto.innerHTML += `<p>${maiorQ} Logica de programação ${menorQ} ${statusC}</p>`
            areaTexto.innerHTML += `<p>${maiorQ} Git ${menorQ} ${statusC}</p>`
            areaTexto.innerHTML += `<p>${maiorQ} Github ${menorQ} ${statusC}</p>`
            areaTexto.innerHTML += `<p>${maiorQ} Python ${menorQ} ${statusC}</p>`
            areaTexto.innerHTML += `<p>${maiorQ} Html5 ${menorQ} ${statusC}</p>`
            areaTexto.innerHTML += `<p>${maiorQ} Css3 ${menorQ} ${statusC}</p>`
            areaTexto.innerHTML += `<p>${maiorQ} Bootstrap 5 ${menorQ} ${statusC}</p>`
            areaTexto.innerHTML += `<p>${maiorQ} JavaScript Basico ${menorQ} ${statusC}</p>`
            areaTexto.innerHTML += `<p>${maiorQ} React ${menorQ} ${statusE}</p>`*/
        } else {
            areaTexto.classList.remove('active');
        }

    }
    
window.addEventListener('scroll', textAnimate);
textAnimate;

    