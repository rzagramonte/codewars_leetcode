'''
Sentence Smash

Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


Will the parameter always be a list of strings?
Will the items in the list all be strings?
Will the return be a string?

print(smash([]), "");
print(smash(["hello"]), "hello");
print(smash(["hello", "world"]), "hello world");
print(smash(["hello", "amazing", "world"]), "hello amazing world");
print(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");


join strings separated by a space
'''
def smash(words):
    return " ".join(words)