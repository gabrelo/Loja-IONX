# Exercícios Git — Loja IONX

## Exercício 1 — Commit e push (CI/CD rodando)

```bash
git init
git remote add origin https://github.com/gabrelo/loja-ionx.git
git add .
git commit -m "feat: landing page IONX com testes"
git push -u origin main
```

Depois: vai em Actions no GitHub e vê os testes rodando automaticamente.

---

## Exercício 2 — Branch e merge

```bash
# Cria uma branch nova
git checkout -b feature/mudar-cor-acento

# Edita src/index.css: muda --accent de #c8ff00 para #ff6b00
# Salva o arquivo, depois:

git add .
git commit -m "feat: muda cor de destaque para laranja"
git push origin feature/mudar-cor-acento

# Volta para main e faz merge
git checkout main
git merge feature/mudar-cor-acento
git push
```

---

## Exercício 3 — Teste de regressão na prática

```bash
# Cria uma branch pra simular um bug
git checkout -b bug/remover-produto

# Edita Products.jsx: apaga um produto da lista
# Roda os testes — VAI FALHAR:
npm test

# O CI também vai falhar se você fizer push
# Isso é o teste de regressão funcionando!

# Corrija o produto, rode os testes de novo:
npm test

# Commita a correção
git add .
git commit -m "fix: restaura produto removido acidentalmente"
git checkout main
git merge bug/remover-produto
```

---

## Exercício 4 — Voltar na estaca zero (3 formas)

### Opção A: git revert (SEGURA — cria novo commit)
Não apaga histórico. Recomendada em equipe.

```bash
# Vê o histórico
git log --oneline

# Reverte o último commit (cria um commit novo que desfaz)
git revert HEAD

# Reverte um commit específico pelo hash
git revert abc1234
```

---

### Opção B: git reset (DESFAZ commits locais)
Volta no tempo, mas mantém as alterações nos arquivos.

```bash
# Volta 1 commit, mantém os arquivos editados
git reset HEAD~1

# Volta 2 commits
git reset HEAD~2
```

---

### Opção C: git reset --hard (DESTRUTIVO — apaga tudo)
Volta no tempo E descarta todas as alterações. Sem volta.

```bash
# Apaga os últimos 1 commit E todas as mudanças nos arquivos
git reset --hard HEAD~1

# Volta para um commit específico pelo hash (apaga tudo depois dele)
git log --oneline        # pega o hash
git reset --hard abc1234
```

---

## Resumo — quando usar cada um

| Situação                              | Comando               |
|---------------------------------------|-----------------------|
| Desfazer sem apagar histórico         | git revert HEAD       |
| Voltar antes de commitar              | git reset HEAD~1      |
| Jogar tudo fora e começar do zero     | git reset --hard HEAD~1 |
| Ver onde você está                    | git log --oneline     |
| Ver o que mudou                       | git diff              |
| Salvar trabalho temporário            | git stash             |
| Recuperar o que foi stashado          | git stash pop         |
