
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

import DiaryCard from '../components/DiaryCard';

const diaryEntries = [
  {
    id: '1',
    title: 'Pagi yang Tenang',
    date: '12 Oktober 2026',
    preview: 'Aku bangun lebih pagi dan berjalan kaki. Udara terasa sejuk dan membuat pikiranku lebih segar.',
    mood: 'Senang',
    moodSource: require('../../assets/moods/happy.png'),
  },
  {
    id: '2',
    title: 'Produktif di Kampus',
    date: '11 Oktober 2026',
    preview: 'Hari ini menyelesaikan tugas praktikum dan berdiskusi dengan teman. Banyak hal baru yang kupelajari.',
    mood: 'Produktif',
    moodSource: { uri: 'https://picsum.photos/seed/focus/100' },
  },
  {
    id: '3',
    title: 'Senja di Taman',
    date: '10 Oktober 2026',
    preview: 'Menikmati senja sambil membaca buku favorit. Langit sore terlihat indah dan menenangkan.',
    mood: 'Tenang',
    moodSource: { uri: 'https://picsum.photos/seed/calm/100' },
  },
  {
    id: '4',
    title: 'Hari yang Melelahkan',
    date: '9 Oktober 2026',
    preview: 'Banyak kegiatan hari ini, tetapi aku belajar untuk beristirahat dan menjaga kesehatan.',
    mood: 'Lelah',
    moodSource: { uri: 'https://picsum.photos/seed/tired/100' },
  },
  {
    id: '5',
    title: 'Bersyukur Hari Ini',
    date: '8 Oktober 2026',
    preview: 'Aku bersyukur atas keluarga, teman, dan kesempatan untuk belajar setiap hari.',
    mood: 'Bersyukur',
    moodSource: { uri: 'https://picsum.photos/seed/grateful/100' },
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.label}>JURNAL HARIAN</Text>
          <Text style={styles.heading}>Buku Harian</Text>
          <Text style={styles.subtitle}>
            Cerita kecil, kenangan besar.
          </Text>
        </View>

        <Image
          source={{ uri: 'https://i.pravatar.cc/120?img=12' }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>
          Catatan Perjalananmu
        </Text>
        <Text style={styles.summaryText}>
          Lima momen yang menjadi bagian dari ceritamu.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Entri Diary</Text>

      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          mood={entry.mood}
          moodSource={entry.moodSource}
        />
      ))}

      <Text style={styles.footer}>Ditulis dengan hati ♡</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 20,
    paddingTop: 16,
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerText: {
    flex: 1,
    paddingRight: 10,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    color: '#64748B',
    marginBottom: 6,
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1E293B',
  },
  subtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 5,
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#E2E8F0',
  },
  summary: {
    backgroundColor: '#E5F0FF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 24,
  },
  summaryTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1E40AF',
    marginBottom: 6,
  },
  summaryText: {
    fontSize: 13,
    lineHeight: 19,
    color: '#334155',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 14,
  },
  footer: {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 8,
  },
});
