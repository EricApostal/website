export interface PlatformSupport {
  label: string
  level: 'full' | 'partial'
}

export const bonfirePlatforms: PlatformSupport[] = [
  { label: 'Android', level: 'full' },
  { label: 'iOS', level: 'full' },
  { label: 'Windows', level: 'full' },
  { label: 'macOS', level: 'full' },
  { label: 'Linux', level: 'full' },
  { label: 'Web', level: 'full' },
  { label: 'WearOS', level: 'partial' },
]

export const bonfireStack = [
  'Flutter / Dart',
  'Riverpod + Freezed',
  'firebridge (nyxx fork)',
  'media_kit',
]

export const flutterbirdPlatforms: PlatformSupport[] = [
  { label: 'Linux', level: 'full' },
  { label: 'Android', level: 'full' },
  { label: 'macOS', level: 'full' },
  { label: 'iOS', level: 'partial' },
]

export const flutterbirdStack = ['Flutter / Dart', 'Ladybird engine', 'Native platform channels', 'C++ interop']
