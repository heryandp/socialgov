export type BudgetPost = {
  id: string
  author: string
  region: string
  time: string
  program: string
  headline: string
  summary: string
  progressLabel: string
  progressValue: string
  budget: string
  comments: number
  saves: number
  tags: string[]
  status: "High Risk" | "Verified" | "Under Review"
  validationPercent: number
  validationLabel: string
  evidenceLabel: string
  avatar: string
}

export type NewsItem = {
  id: string
  source: string
  region: string
  time: string
  title: string
  summary: string
  heat: string
  category: string
}

export type InstitutionProfile = {
  slug: string
  name: string
  shortName: string
  description: string
  website: string
  budgetTracked: string
  verifiedPosts: string
  activeDisputes: string
  trustScore: string
  trustLabel: string
  related: Array<{ name: string; subtitle: string }>
  gallery: Array<{
    id: string
    title: string
    value: string
    status: "Verified" | "Review" | "Disputed" | "Document"
  }>
}

export const budgetPosts: BudgetPost[] = [
  {
    id: "pupr-jembatan",
    author: "PUPR - Wilayah III",
    region: "IKN, Kalimantan",
    time: "2 jam lalu",
    program: "Pembangunan Jembatan Suku A",
    headline:
      "Indikasi pengurangan spesifikasi material muncul saat progres fisik tertinggal jauh.",
    summary:
      "Anggaran terserap 85% tetapi realisasi fisik baru 45%. Feed ini menyorot selisih progres, spesifikasi lapangan, dan bukti warga dalam satu kartu yang mudah dipindai.",
    progressLabel: "Validation meter",
    progressValue: "45%",
    budget: "Rp15,2 Miliar",
    comments: 142,
    saves: 318,
    tags: ["APBN 2024", "Infrastruktur", "High Risk"],
    status: "High Risk",
    validationPercent: 45,
    validationLabel: "Authenticated",
    evidenceLabel: "Investigasi Detail",
    avatar: "PU",
  },
  {
    id: "diknas-sekolah",
    author: "Dinas Pendidikan",
    region: "Jawa Barat",
    time: "5 jam lalu",
    program: "Rehabilitasi 12 SD Negeri",
    headline: "Laporan masyarakat mengonfirmasi kualitas bangunan sesuai spesifikasi teknis.",
    summary:
      "Postingan seperti ini harus terasa seperti social proof: ada progres, ada validasi publik, dan ada ringkasan anggaran tanpa memaksa pengguna berpindah ke halaman lain.",
    progressLabel: "Validation meter",
    progressValue: "98%",
    budget: "Rp4,8 Miliar",
    comments: 86,
    saves: 264,
    tags: ["Pendidikan", "Verified", "Laporan Warga"],
    status: "Verified",
    validationPercent: 98,
    validationLabel: "Authenticated",
    evidenceLabel: "Lihat Laporan Warga",
    avatar: "DP",
  },
  {
    id: "bansos-makassar",
    author: "Dinsos Kota",
    region: "Makassar",
    time: "7 jam lalu",
    program: "Distribusi Bantuan Sosial",
    headline:
      "Percakapan publik meningkat karena data penerima dan distribusi belum sepenuhnya sinkron.",
    summary:
      "Ada banyak diskusi aktif, tetapi bukti lapangan masih bercampur. Ini tipe post yang tepat diberi status review, bukan langsung positif atau negatif.",
    progressLabel: "Validation meter",
    progressValue: "63%",
    budget: "Rp96,8 Miliar",
    comments: 204,
    saves: 190,
    tags: ["Bansos", "Review", "Makassar"],
    status: "Under Review",
    validationPercent: 63,
    validationLabel: "Authenticated",
    evidenceLabel: "Buka Diskusi Publik",
    avatar: "DS",
  },
] as const

export const watchRegions = [
  {
    name: "Lapor",
    score: 0,
    delta: "baru",
    cue: "Kirim laporan atau temuan warga.",
  },
  {
    name: "Kemenkeu",
    score: 89,
    delta: "+4.8%",
    cue: "Transportasi publik dan sanitasi jadi penggerak utama minggu ini.",
  },
  {
    name: "Kemenkes",
    score: 84,
    delta: "+3.1%",
    cue: "Belanja kesehatan dasar tetap konsisten.",
  },
  {
    name: "DPR RI",
    score: 72,
    delta: "pantau",
    cue: "Sorotan publik menguat di area pengawasan.",
  },
  {
    name: "Kemendikbud",
    score: 81,
    delta: "+2.2%",
    cue: "Sekolah dan laboratorium kembali jadi fokus.",
  },
] as const

export const quickSignals = [
  "Feed menempatkan nominal, progres, dan validasi warga dalam satu view.",
  "Status warna dipakai untuk membaca risiko tanpa membuka laporan panjang.",
  "Posting yang sehat bukan hanya serapan tinggi, tetapi bukti lapangannya juga konsisten.",
] as const

export const newsroom: NewsItem[] = [
  {
    id: "editorial-investigasi",
    source: "Tim Redaksi",
    region: "Nasional",
    time: "12 Okt 2023",
    title:
      "Kejanggalan Rp 2,4 Triliun: Menelusuri Jejak Anggaran Fiktif di Sektor Infrastruktur Daerah",
    summary:
      "Analisis data APBD 2023 menunjukkan lonjakan tak wajar pada pos pemeliharaan jalan provinsi. Temuan awal memperlihatkan pola proyek dengan serapan tinggi tetapi bukti fisik rendah.",
    heat: "Investigasi Khusus",
    category: "Editorial",
  },
  {
    id: "rapbn-pendidikan",
    source: "Analisis Data",
    region: "Nasional",
    time: "10 Okt 2023",
    title: "Membedah Postur RAPBN 2024: Subsidi Energi vs Pendidikan",
    summary:
      "Ketika subsidi energi bergeser, pertanyaan besarnya adalah apakah belanja wajib pendidikan tetap terjaga atau hanya aman di atas kertas.",
    heat: "Analisis Data",
    category: "APBN",
  },
  {
    id: "disputed-budget",
    source: "Komunitas Jaga Anggaran",
    region: "5 provinsi utama",
    time: "08 Okt 2023",
    title: "5 daerah dengan tingkat disputed budget tertinggi bulan ini",
    summary:
      "Laporan komunitas menunjukkan peningkatan kejanggalan pada pengadaan barang dan belanja pemeliharaan yang sulit diverifikasi secara cepat.",
    heat: "2.4k diskusi aktif",
    category: "Topik Hangat",
  },
] as const

export const feedMetrics = [
  {
    label: "Posting hari ini",
    value: "19",
    detail: "update aktif lintas sektor",
  },
  {
    label: "Laporan warga",
    value: "1.2k",
    detail: "bukti dan komentar masuk",
  },
  {
    label: "Kasus high risk",
    value: "14",
    detail: "perlu investigasi lanjutan",
  },
] as const

export const watchlistTopics = [
  "Pengadaan laptop",
  "Belanja pendidikan",
  "Jalan dan konektivitas",
  "Bansos daerah",
  "Air bersih",
] as const

export const institutions: InstitutionProfile[] = [
  {
    slug: "pupr",
    name: "Kementerian PUPR",
    shortName: "PUPR",
    description:
      "Kementerian Pekerjaan Umum dan Perumahan Rakyat Republik Indonesia. Membangun infrastruktur negeri.",
    website: "pu.go.id",
    budgetTracked: "Rp146T",
    verifiedPosts: "82%",
    activeDisputes: "14",
    trustScore: "A-",
    trustLabel: "High Trust",
    related: [
      { name: "Bappenas", subtitle: "National Planning" },
      { name: "Kemenkeu", subtitle: "Ministry of Finance" },
    ],
    gallery: [
      { id: "g1", title: "Pembangunan jembatan", value: "Rp45,2M", status: "Verified" },
      { id: "g2", title: "Pengaspalan jalan", value: "Rp12,5M", status: "Review" },
      { id: "g3", title: "Bendungan", value: "Rp890M", status: "Disputed" },
      { id: "g4", title: "Rusun publik", value: "Rp210M", status: "Verified" },
      { id: "g5", title: "Irigasi", value: "Rp8,2M", status: "Verified" },
      {
        id: "g6",
        title: "Laporan Keuangan Kuartal III 2023",
        value: "Document",
        status: "Document",
      },
    ],
  },
] as const

export const featuredEditorialQuote =
  "Transparansi anggaran bukan sekadar menampilkan deretan angka di portal pemerintah. Itu adalah hak warga untuk menagih janji atas pajak yang mereka bayar."
