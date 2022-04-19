export const badgeColor = (obj) => {
    return obj.category === 'Monopatines' ? 'info' : (obj.category === 'Bicicletas' ? 'primary' : 'warning')
}