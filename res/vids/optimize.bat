ffmpeg -y -i $1$.mp4 -s 1280x720 -c:v libx264 -b 3M -strict -2 -movflags $1$_optimized.mp4
