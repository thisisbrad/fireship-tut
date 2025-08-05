Ensure FFmpeg is installed,
if ! command -v ffmpeg &> /dev/null; then
echo "FFmpeg is not installed. Please install it and try again."
exit 1
fi

Function to optimize a video,
optimize_video() {
input_file=$1
output_file=$2
bitrate=$3
audio_bitrate=$4
resolution=$5
no_audio=$6

    # Convert MOV to MP4, adjust bitrate, optimize for web, and set resolution
    if [ "$no_audio" = true ]; then
        ffmpeg -i "$input_file" -b:v "$bitrate" -vf "scale=$resolution" -movflags +faststart -an "$output_file"
    else
        ffmpeg -i "$input_file" -b:v "$bitrate" -b:a "$audio_bitrate" -vf "scale=$resolution" -movflags +faststart "$output_file"
    fi

}

Check for input parameters,
if [ "$#" -lt 1 ]; then
echo "Usage: $0 input_file.mov [output_file.mp4] [bitrate] [audio_bitrate] [resolution] [no_audio]"
exit 1
fi

Set default values,
input_file=$1
output_file=${2:-"output.mp4"}
bitrate=${3:-"1000k"}
audio_bitrate=${4:-"128k"}
resolution=${5:-"1280:720"}
no_audio=${6:-false}

Call the optimize function,
optimize_video "$input_file" "$output_file" "$bitrate" "$audio_bitrate" "$resolution" "$no_audio"

echo "Video optimization complete. Output file: $output_file"
[6:10 PM]
#!/bin/bash

# Ensure FFmpeg is installed

if ! command -v ffmpeg &> /dev/null; then
echo "FFmpeg is not installed. Please install it and try again."
exit 1
fi

# Function to optimize a video

optimize_video() {
input_file=$1
output_file=$2
bitrate=$3
audio_bitrate=$4
resolution=$5
no_audio=$6

    # Convert MOV to MP4, adjust bitrate, optimize for web, and set resolution
    if [ "$no_audio" = true ]; then
        ffmpeg -i "$input_file" -b:v "$bitrate" -vf "scale=$resolution" -movflags +faststart -an "$output_file"
    else
        ffmpeg -i "$input_file" -b:v "$bitrate" -b:a "$audio_bitrate" -vf "scale=$resolution" -movflags +faststart "$output_file"
    fi

}

# Check for input parameters

if [ "$#" -lt 1 ]; then
echo "Usage: $0 input_file.mov [output_file.mp4] [bitrate] [audio_bitrate] [resolution] [no_audio]"
exit 1
fi

# Set default values

input_file=$1
output_file=${2:-"output.mp4"}
bitrate=${3:-"1000k"}
audio_bitrate=${4:-"128k"}
resolution=${5:-"1280:720"}
no_audio=${6:-false}

# Call the optimize function

optimize_video "$input_file" "$output_file" "$bitrate" "$audio_bitrate" "$resolution" "$no_audio"

echo "Video optimization complete. Output file: $output_file"
[6:11 PM]
Video Optimization Script,
This script optimizes MOV video files by converting them to MP4 format, adjusting the bitrate, and setting the resolution. It also includes an option to remove audio.

Prerequisites,
Ensure FFmpeg is installed on your system. You can install it via Homebrew on macOS:

brew install ffmpeg

How to use,
The goal of this script is to reduce the files size by compressing a video file. This is great for MOV files that need to be compressed to h264 encoded mp4 files.

./optimize_videos.sh input_file.mov [output_file.mp4] [bitrate] [audio_bitrate] [resolution] [no_audio]

./optimize-video.sh input.mov output.mp4 500k 128k 1280:720 true

Parameters,
input_file.mov (required): The input MOV file (other acceptable formats include MP4, AVI, MKV, WMV, etc.).,
output_file.mp4 (optional): The output MP4 file. Defaults to output.mp4.,
bitrate (optional): The target video bitrate. Defaults to 800k.,
audio_bitrate (optional): The target audio bitrate. Defaults to 96k.,
resolution (optional): The target resolution. Defaults to 1280:720.,
no_audio (optional): Set to true to remove audio. Defaults to false.,

Notes,
Ensure the script is executable
chmod +x optimize_videos.sh
