ch = input();
if ch == '0':
    exit();
else:
    if((ch>='a' and ch<='z') or (ch>='A' and ch<='Z')):
    	print("Alphabet.");
    else:
    	print(ch, "is not an alphabet.");
