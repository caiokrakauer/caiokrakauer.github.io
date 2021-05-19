import random
cores = ["amarelo","azul","branco","laranja","preto","rosa","roxo","verde","vermelho"]
cores2 = ["amarelo","azul","branco","laranja","preto","rosa","roxo","verde","vermelho"]
random.shuffle(cores)
random.shuffle(cores2)
cores.extend(cores2)
for i in cores:
    print(i)