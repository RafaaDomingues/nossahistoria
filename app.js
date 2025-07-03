
        // Contador de dias desde 15 de março de 2025
        function updateDaysCounter() {
            const startDate = new Date('2025-02-21');
            const today = new Date();
            const diffTime = Math.abs(today - startDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            document.getElementById('daysCounter').textContent = diffDays;
        }

        // Atualiza o contador quando a página carrega
        updateDaysCounter();

        // Atualiza o contador a cada hora
        setInterval(updateDaysCounter, 3600000);

        // Efeito de clique para criar corações
        document.addEventListener('click', function (e) {
            const heart = document.createElement('div');
            heart.innerHTML = '♥';
            heart.style.position = 'fixed';
            heart.style.left = e.clientX + 'px';
            heart.style.top = e.clientY + 'px';
            heart.style.fontSize = '1.5rem';
            heart.style.color = '#FF6B6B';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            heart.style.animation = 'floatUp 2s ease-out forwards';

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 2000);
        });

        // CSS para animação dos corações
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatUp {
                0% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translateY(-100px) scale(0.3);
                }
            }
        `;
        document.head.appendChild(style);