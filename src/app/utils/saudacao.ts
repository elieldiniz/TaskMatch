export function saudacao() {
    const h = new Date().getHours()
    if (h < 12) return "Bom dia"
    if (h < 18) return "Boa tarde"
    return "Boa noite"
  }