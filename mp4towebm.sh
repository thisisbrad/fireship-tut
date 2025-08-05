#!/bin/bash

# Basic MP4 to WebM conversion
# Usage: ./convert.sh input.mp4 [output.webm]

# Check if input file is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 input.mp4 [output.webm]"
    echo "Example: $0 video.mp4"
    echo "Example: $0 video.mp4 converted.webm"
    exit 1
fi

INPUT="$1"
OUTPUT="${2:-${INPUT%.*}.webm}"

# Check if input file exists
if [ ! -f "$INPUT" ]; then
    echo "Error: Input file '$INPUT' not found!"
    exit 1
fi

echo "Converting $INPUT to $OUTPUT..."

# Basic conversion with good quality settings
ffmpeg -i "$INPUT" \
    -c:v libvpx-vp9 \
    -c:a libopus \
    -crf 30 \
    -b:v 0 \
    -b:a 128k \
    -threads 4 \
    "$OUTPUT"

# Alternative high-quality conversion (uncomment to use instead)
# ffmpeg -i "$INPUT" \
#     -c:v libvpx-vp9 \
#     -c:a libopus \
#     -crf 23 \
#     -b:v 0 \
#     -b:a 192k \
#     -row-mt 1 \
#     -threads 8 \
#     "$OUTPUT"

# Alternative fast conversion with VP8 (uncomment to use instead)
# ffmpeg -i "$INPUT" \
#     -c:v libvpx \
#     -c:a libvorbis \
#     -crf 10 \
#     -b:v 1M \
#     -b:a 128k \
#     "$OUTPUT"

if [ $? -eq 0 ]; then
    echo "Conversion completed successfully: $OUTPUT"
    
    # Show file sizes for comparison
    INPUT_SIZE=$(du -h "$INPUT" | cut -f1)
    OUTPUT_SIZE=$(du -h "$OUTPUT" | cut -f1)
    echo "Original size: $INPUT_SIZE"
    echo "WebM size: $OUTPUT_SIZE"
else
    echo "Conversion failed!"
    exit 1
fi