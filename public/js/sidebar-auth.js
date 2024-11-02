document.addEventListener('DOMContentLoaded', (event) => {

    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebarDropdown = document.getElementById('sidebarDropdown');

    function toggleDropdown(dropdown) {
        // Primeiro, removemos ou adicionamos a classe 'hidden' imediatamente
        dropdown.classList.toggle('hidden');

        // Em seguida, aguardamos um repaint antes de alternar opacidade e transição
        setTimeout(() => {
            dropdown.classList.toggle('opacity-0');
            dropdown.classList.toggle('-translate-y-2');
        }, 10); // Esse atraso pequeno ajuda a garantir o efeito de transição suave
    }

    toggleSidebar.addEventListener('click', () => {
        toggleDropdown(sidebarDropdown);

        // Certifique-se de ocultar outros dropdowns
        toggleSidebar.classList.toggle('change');
    });

    // Fechar dropdowns ao clicar fora deles
    window.addEventListener('click', (e) => {
        if (!toggleSidebar.contains(e.target) && !sidebarDropdown.contains(e.target)) {
            sidebarDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');
            toggleSidebar.classList.remove('change');
        }
    });

    // Implementar a funcionalidade de busca

});