import Button from '../components/ui/Button.jsx';
import Card from '../components/ui/Card.jsx';
import FormField from '../components/ui/FormField.jsx';

export default function Components() {
  return (
    <>
      <section className="page-banner"><div><span className="eyebrow">Pustaka Komponen</span><h1>Komponen Cerdas Ceria</h1><p>Button, Card, dan FormField beserta variasi dan state-nya.</p></div></section>

      <section className="demo-section">
        <h2>Button</h2><p>Tombol aksi dengan dua variasi dan dua ukuran.</p>
        <p className="demo-caption">Variasi</p>
        <div className="demo-row"><Button>Daftar Sekarang</Button><Button variant="outline">Kembali</Button></div>
        <p className="demo-caption">Ukuran</p>
        <div className="demo-row"><Button>Default</Button><Button size="small">Small</Button><Button variant="outline" size="small">Pilih Kelas</Button></div>
        <p className="demo-caption">State: disabled</p>
        <div className="demo-row"><Button disabled>Primary disabled</Button><Button variant="outline" disabled>Outline disabled</Button></div>
        <p className="demo-caption">Lebar penuh</p>
        <Button fullWidth type="submit">Daftar Sekarang →</Button>
      </section>

      <section className="demo-section">
        <h2>Card</h2><p>Kartu konten dengan pilihan warna dan state terpilih.</p>
        <p className="demo-caption">Variasi warna</p>
        <div className="demo-grid">
          <Card color="yellow" title="Kelas Membaca">Belajar membaca dengan cara menyenangkan.</Card>
          <Card color="pink" title="Kelas Menulis">Melatih kemampuan menulis anak.</Card>
          <Card color="blue" title="Kelas Berhitung">Belajar berhitung dasar sampai lancar.</Card>
          <Card color="green" title="Paket Lengkap">Satu paket baca, tulis, hitung.</Card>
        </div>
        <p className="demo-caption">Dengan tombol (footer) dan state terpilih</p>
        <div className="demo-grid">
          <Card title="Kelas Membaca" footer={<Button variant="outline" size="small">Pilih Kelas</Button>}>Rp 150.000 / bulan</Card>
          <Card title="Paket Lengkap" color="blue" selected footer={<Button size="small">Pilih Paket</Button>}>Rp 350.000 / bulan</Card>
        </div>
      </section>

      <section className="demo-section">
        <h2>FormField</h2><p>Label, isian, dan pesan bantuan atau error.</p>
        <div className="demo-grid">
          <FormField label="Nama lengkap" name="nama" placeholder="Nama lengkap orang tua" required />
          <FormField label="Email" name="email" type="email" placeholder="nama@email.com" optional hint="Dipakai untuk kabar kelas." />
          <FormField label="Usia anak" name="usia" type="select" options={['4 tahun', '5 tahun', '6 tahun', '7 tahun', '8 tahun']} placeholder="Pilih usia anak (4-8 tahun)" required />
          <FormField label="Catatan tambahan" name="catatan" type="textarea" placeholder="Hal yang perlu kami ketahui" optional />
        </div>
        <p className="demo-caption">State: error dan disabled</p>
        <div className="demo-grid">
          <FormField label="Nomor WhatsApp" name="wa" type="tel" placeholder="0812 3456 7890" required error="Nomor WhatsApp wajib diisi." />
          <FormField label="Kelas" name="kelas" placeholder="Kelas Membaca" disabled />
        </div>
      </section>
    </>
  );
}
