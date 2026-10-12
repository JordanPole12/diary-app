
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DiaryCard({
  title,
  date,
  preview,
  moodSource,
  mood,
}) {
  const colors = {
    Senang: '#DDF5E5',
    Produktif: '#DDEBFF',
    Tenang: '#F0E4FF',
    Lelah: '#FFE8D6',
    Bersyukur: '#FFF2BD',
  };

  const color = colors[mood] || '#E5E7EB';

  return (
    <View style={[styles.card, { borderLeftColor: color }]}>
      <Image source={moodSource} style={styles.image} />

      <View style={styles.content}>
        <Text style={[styles.badge, { backgroundColor: color }]}>
          {mood}
        </Text>

        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

        <Text style={styles.date}>{date}</Text>

        <Text style={styles.preview} numberOfLines={3}>
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderLeftWidth: 5,
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
    gap: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F3F4F6',
  },
  content: {
    flex: 1,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 10,
    overflow: 'hidden',
    fontSize: 11,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },
  date: {
    fontSize: 12,
    color: '#6B7280',
    marginVertical: 5,
  },
  preview: {
    fontSize: 13,
    lineHeight: 19,
    color: '#4B5563',
  },
});
