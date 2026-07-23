#!/usr/bin/env python3
"""
img/ 폴더를 훑어 img/manifest.js 를 다시 씁니다.

    python3 tools/scan-images.py

이미지를 폴더에 넣거나 지운 뒤 한 번 실행하면 상세 페이지에 그대로 반영됩니다.
정적 호스팅에는 폴더 목록 API가 없어서, 목록을 파일로 굽는 방식이 필요합니다.
숫자 → 문자 순으로 정렬됩니다 (2- 가 10- 보다 앞). 앞에 1-, 2- 를 붙여 순서를 정하세요.
첫 장이 카드 커버입니다.
"""
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
EXT = {'.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'}


def natural(name: str):
    """숫자 → 문자 순. 숫자 구간은 수로 비교해 2- 가 10- 보다 앞선다."""
    return [(0, int(c), '') if c.isdigit() else (1, 0, c.lower())
            for c in re.split(r'(\d+)', name) if c]

manifest = {}
for group in ('projects', 'games'):
    for folder in sorted((ROOT / 'img' / group).glob('*/')):
        files = sorted((f.name for f in folder.iterdir() if f.suffix.lower() in EXT), key=natural)
        if files:
            manifest[f'img/{group}/{folder.name}/'] = files

out = ROOT / 'img' / 'manifest.js'
out.write_text(
    '// AUTO-GENERATED — 직접 고치지 마세요. `python3 tools/scan-images.py` 로 다시 만듭니다.\n'
    'const IMAGES = ' + json.dumps(manifest, indent=2, ensure_ascii=False) + ';\n',
    encoding='utf-8',
)

for d, files in manifest.items():
    print(f'{d:34} {len(files)}')
print(f'\n→ {out.relative_to(ROOT)}')
