export default function formatDate(waktu) {
    const date = new Date(waktu);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('id-ID', options);
}