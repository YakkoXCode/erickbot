let handler = async m => m.reply(`
┌〔 Donasi • Pulsa 〕
├ Tsel [081266701766]
├ Im3 [085835150434]
└────

┌〔 Donasi • Emoney 〕
├ OVO, Dana [081266701766]
├ https://saweria.co/YakkoXCode
└────
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
