
# 🛍️ Loja do Vinte · Vitrine Virtual Premium

**Elegância, qualidade e acessibilidade a partir de R$20.**  
Este projeto representa uma experiência de e-commerce cuidadosamente projetada, desenvolvida com foco em **design moderno**, **navegação fluida** e **integração nativa com WhatsApp**, permitindo que usuários descubram, explorem e adquiram produtos premium com apenas um clique.

![Loja do Vinte - Hero](assets/images/hero-bg.jpg)

---

## ✨ Visão Geral

A *Loja do Vinte* é uma vitrine digital que combina:

- ✨ **Interface Responsiva e Estética Sofisticada**
- 📱 **Botões interativos com integração direta via WhatsApp**
- 🧠 **Sistema de filtragem inteligente por categorias**
- 🎯 **Seções otimizadas para experiência do usuário**
- 🔄 **Carregamento animado e efeitos AOS (Animate on Scroll)**

---

## 🧱 Estrutura do Projeto

```plaintext
📁 Loja-do-Vinte/
├── index.html
├── css/
│   ├── main.css
│   └── animations.css
├── js/
│   ├── main.js
│   └── scroll.js
├── assets/
│   └── images/
│       └── hero-bg.jpg
├── Img/
│   └── [imagens dos produtos]
```

---

## 🚀 Tecnologias Utilizadas

- **HTML5** – Estrutura semântica e acessível  
- **CSS3** – Design visual refinado com variáveis CSS customizadas  
- **JavaScript Vanilla** – Funcionalidades interativas e filtragem de produtos  
- **Font Awesome** – Ícones sociais e de interface  
- **Google Fonts** – Tipografias premium: *Playfair Display* & *Montserrat*  
- **AOS.js** – Animações suaves ao rolar  

---

## 🧭 Navegação

### 🔝 Cabeçalho (Navbar)
Menu fixo com scroll suave, destaque de seção ativa e botão flutuante do WhatsApp para conversão instantânea.

### 🎬 Preloader
Animação visual elegante exibida ao carregar a página:

```html
<div class="preloader">
  <div class="preloader-inner">
    <div class="preloader-icon">
      <span></span>
      <span></span>
    </div>
  </div>
</div>
```

### 🦸‍♀️ Seção Hero
Chamada visual com CTA duplo: **"Ver Coleção"** e **"Visite-nos"**, com efeitos de profundidade visual e animação AOS.

### 📖 Seção Sobre
Apresenta o propósito da loja, estatísticas visuais e um selo de **experiência de mercado** com design institucional.

### 🛒 Produtos
Catálogo dinâmico e filtrável com cards responsivos, sistema de **visualização rápida**, **notas de avaliação**, **preços claros** e **botão de compra via WhatsApp**.

```html
<a href="https://wa.me/5544999838995?text=Olá!..." class="btn btn-whatsapp">
  <i class="fab fa-whatsapp"></i> Comprar
</a>
```

### 🧸 Categorias

- 👕 **Roupas**  
- 🧒 **Infantil**  
- 🎁 **Acessórios**

---

## 🛍️ Modal de Produto (Quick View)

Janela modal interativa e responsiva com múltiplas imagens, avaliações, descrição rica e botões de ação:

```html
<div class="product-modal">
  <div class="modal-overlay"></div>
  <div class="modal-content">
    ...
  </div>
</div>
```

---

## 📢 Depoimentos

Carrossel horizontal com **avaliações reais**, imagens de clientes e comentários autênticos sobre a loja.

---

## 📍 Contato e Localização

Inclui:

- Endereço físico completo
- Mapa Google Maps incorporado
- Botão para traçar rota
- Horário de atendimento
- Botões rápidos para WhatsApp

---

## 📲 Integração WhatsApp

Disponível em diversos pontos estratégicos:

- ✅ Botões de compra em cada produto  
- ✅ CTA principal no Hero e seção final  
- ✅ Rodapé institucional  
- ✅ Botão flutuante global  

---

## 🌈 Design System (CSS)

Sistema visual modular e reutilizável baseado em variáveis CSS:

```css
:root {
  --primary-color: #FFD700;
  --secondary-color: #1a1a1a;
  --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --border-radius: 8px;
  ...
}
```

Com efeitos de **hover**, **transições suaves**, e **responsividade mobile-first**.

---

## 🔍 Funcionalidades em Destaque

| Recurso                      | Detalhe                          |
|-----------------------------|----------------------------------|
| ✅ Preloader Animado         | HTML + CSS puro                  |
| ✅ Filtro de Categorias      | JavaScript com `data-category`  |
| ✅ Modal de Visualização     | Interface rica e funcional       |
| ✅ Animações com AOS         | Scroll suave e impactante        |
| ✅ WhatsApp Integrado        | Conversão direta                 |
| ✅ Scroll to Top             | Navegação fluida                 |
| ✅ Google Maps Embed         | Acesso facilitado à loja física |
| ✅ Tipografia Dupla          | Playfair + Montserrat            |

---

## 📱 Responsividade

O layout é completamente adaptado para:

- ✅ Smartphones  
- ✅ Tablets  
- ✅ Telas grandes  

Tecnologias usadas: **Flexbox**, **Grid Layout** e **media queries inteligentes**.

---

## 📦 Instalação Local (Para Desenvolvedores)

Clone o projeto e visualize localmente:

```bash
git clone https://github.com/seuusuario/loja-do-vinte.git
cd loja-do-vinte
# Abra o index.html com seu navegador
```

---

## 🧠 Para Contribuidores

Sinta-se livre para contribuir com:

1. Novos recursos e categorias
2. Melhorias visuais ou de acessibilidade
3. Integração com backend (Node.js, Firebase, etc.)
4. SEO e otimizações de performance

Pull Requests são bem-vindos! 💡

---

## 🏁 Versão Inicial

📌 **Versão 1.0.0**  
Funcionalidades da versão inicial:

- Página única (Single Page)
- 3 categorias: Roupas, Infantil, Acessórios
- Modal de visualização rápida
- Integração com WhatsApp

---

## 🔐 Licença

Distribuído sob a **Licença MIT**.  
Você pode usar, modificar e adaptar este projeto para seu próprio negócio com liberdade.

---

## 🤝 Agradecimentos

Feito com 💛 por **Cliffordson Cetoute**  
Inspirado em experiências reais de varejo acessível com sofisticação.

> “A moda acessível é um direito, não um luxo.” — *Loja do Vinte*
